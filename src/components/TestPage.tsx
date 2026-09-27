import { useEffect, useMemo, useRef, useState } from 'react'
import logo from '../assets/logo-light.webp'
import { course } from '../data/content'
import { testAnswers, testDomains, testQuestions, type TestDomain } from '../data/test'
import { reachGoal } from '../services/analytics'

type Stage = 'intro' | 'questions' | 'result'

type StoredProgress = {
  version: 1
  answers: Array<number | null>
  current: number
  stage: Stage
  milestones: number[]
}

const storageKey = 'pm_test_progress_v1'

function emptyProgress(): StoredProgress {
  return {
    version: 1,
    answers: Array(testQuestions.length).fill(null),
    current: 0,
    stage: 'intro',
    milestones: []
  }
}

function readProgress(): StoredProgress {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) ?? '') as Partial<StoredProgress>
    const validAnswers = Array.isArray(saved.answers)
      && saved.answers.length === testQuestions.length
      && saved.answers.every((answer) => answer === null || (Number.isInteger(answer) && answer >= 1 && answer <= 6))

    if (!validAnswers) return emptyProgress()

    const answers = saved.answers as Array<number | null>
    const answeredCount = answers.filter((answer) => answer !== null).length
    const current = Math.min(Math.max(Number(saved.current) || 0, 0), testQuestions.length - 1)
    const stage = answeredCount === testQuestions.length
      ? 'result'
      : answeredCount > 0
        ? 'questions'
        : 'intro'

    return {
      version: 1,
      answers,
      current,
      stage,
      milestones: Array.isArray(saved.milestones)
        ? saved.milestones.filter((item) => [25, 50, 75].includes(item))
        : []
    }
  } catch {
    return emptyProgress()
  }
}

function saveProgress(progress: StoredProgress) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress))
  } catch {
    // Тест продолжит работать, даже если браузер запретил localStorage.
  }
}

function getRankedDomains(answers: Array<number | null>) {
  return testDomains
    .map((domain, order) => {
      const questions = testQuestions.filter((question) => question.domain === domain.id)
      const total = questions.reduce((sum, question) => {
        const answer = answers[question.id - 1] ?? 1
        return sum + (question.reverse ? 7 - answer : answer)
      }, 0)

      return { domain, score: total / questions.length, order }
    })
    .sort((left, right) => right.score - left.score || left.order - right.order)
}

export function TestPage() {
  const [progress, setProgress] = useState<StoredProgress>(readProgress)
  const [shareStatus, setShareStatus] = useState('')
  const headingRef = useRef<HTMLHeadingElement>(null)
  const answeredCount = progress.answers.filter((answer) => answer !== null).length
  const currentQuestion = testQuestions[progress.current]
  const selectedAnswer = progress.answers[progress.current]
  const rankedDomains = useMemo(() => getRankedDomains(progress.answers), [progress.answers])

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Точки опоры — короткая практика | Путь мужчины'
    reachGoal('TEST_OPEN')
    return () => { document.title = previousTitle }
  }, [])

  useEffect(() => {
    saveProgress(progress)
    headingRef.current?.focus()
  }, [progress])

  function updateProgress(next: StoredProgress) {
    setProgress(next)
  }

  function startTest() {
    reachGoal('TEST_START')
    updateProgress({ ...progress, stage: 'questions' })
  }

  function selectAnswer(value: number) {
    const answers = [...progress.answers]
    answers[progress.current] = value
    updateProgress({ ...progress, answers })
  }

  function goForward() {
    if (selectedAnswer === null) return

    const newAnsweredCount = progress.answers.filter((answer) => answer !== null).length
    const milestones = [...progress.milestones]

    for (const threshold of [25, 50, 75]) {
      if ((newAnsweredCount / testQuestions.length) * 100 >= threshold && !milestones.includes(threshold)) {
        milestones.push(threshold)
        reachGoal(`TEST_PROGRESS_${threshold}`)
      }
    }

    if (progress.current === testQuestions.length - 1) {
      reachGoal('TEST_COMPLETE')
      updateProgress({ ...progress, stage: 'result', milestones })
      return
    }

    updateProgress({ ...progress, current: progress.current + 1, milestones })
  }

  function goBack() {
    if (progress.current === 0) {
      updateProgress({ ...progress, stage: 'intro' })
      return
    }

    updateProgress({ ...progress, current: progress.current - 1 })
  }

  function restartTest() {
    const next = emptyProgress()
    saveProgress(next)
    setShareStatus('')
    setProgress(next)
  }

  async function shareTest() {
    const url = new URL('/test', window.location.origin).toString()
    const shareData = {
      title: 'Точки опоры — Путь мужчины',
      text: 'Короткая практика, которая помогает увидеть свои сильные стороны и определить направление развития.',
      url
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        reachGoal('TEST_SHARE')
        setShareStatus('Ссылка отправлена')
        return
      }

      await navigator.clipboard.writeText(url)
      reachGoal('TEST_SHARE')
      setShareStatus('Ссылка скопирована')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      setShareStatus(`Скопируйте ссылку: ${url}`)
    }
  }

  return (
    <div className="testPage">
      <a className="skipLink" href="#test-content">Перейти к содержанию</a>
      <header className="testHeader">
        <a className="testBrand" href="/" aria-label="Путь мужчины — вернуться на главную">
          <img src={logo} alt="Логотип курса Путь мужчины" />
        </a>
        <a className="testBackHome" href="/">О курсе <span aria-hidden="true">↗</span></a>
      </header>

      <main id="test-content" className="testMain">
        {progress.stage === 'intro' ? (
          <TestIntro
            headingRef={headingRef}
            hasProgress={answeredCount > 0}
            onStart={startTest}
            onRestart={restartTest}
          />
        ) : null}

        {progress.stage === 'questions' ? (
          <section className="testQuestionScreen" aria-labelledby="question-title">
            <div className="testProgressMeta">
              <span>Вопрос {progress.current + 1} из {testQuestions.length}</span>
              <span>{Math.round(((progress.current + 1) / testQuestions.length) * 100)}%</span>
            </div>
            <div className="testProgressTrack" aria-hidden="true">
              <span style={{ width: `${((progress.current + 1) / testQuestions.length) * 100}%` }} />
            </div>

            <form onSubmit={(event) => { event.preventDefault(); goForward() }}>
              <h1 ref={headingRef} id="question-title" className="testQuestionTitle" tabIndex={-1}>{currentQuestion.text}</h1>
              <fieldset className="testQuestionCard" aria-labelledby="question-title">
                <legend className="visuallyHidden">Выберите один вариант ответа</legend>
                <div className="testAnswerList">
                  {testAnswers.map((label, index) => {
                    const value = index + 1
                    return (
                      <label className={`testAnswer${selectedAnswer === value ? ' selected' : ''}`} key={label}>
                        <input
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          value={value}
                          checked={selectedAnswer === value}
                          onChange={() => selectAnswer(value)}
                        />
                        <span className="testAnswerNumber" aria-hidden="true">{value}</span>
                        <span>{label}</span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>
              <div className="testNavigation">
                <button className="btn secondary" type="button" onClick={goBack}>← Назад</button>
                <button className="btn primary" type="submit" disabled={selectedAnswer === null}>
                  {progress.current === testQuestions.length - 1 ? 'Увидеть результат' : 'Далее →'}
                </button>
              </div>
            </form>
          </section>
        ) : null}

        {progress.stage === 'result' ? (
          <TestResult
            headingRef={headingRef}
            strengths={[rankedDomains[0].domain, rankedDomains[1].domain]}
            attention={rankedDomains.at(-1)!.domain}
            shareStatus={shareStatus}
            onShare={shareTest}
            onRestart={restartTest}
          />
        ) : null}
      </main>
    </div>
  )
}

function TestIntro({
  headingRef,
  hasProgress,
  onStart,
  onRestart
}: {
  headingRef: React.RefObject<HTMLHeadingElement | null>
  hasProgress: boolean
  onStart: () => void
  onRestart: () => void
}) {
  return (
    <section className="testIntro" aria-labelledby="test-title">
      <div className="testIntroCopy">
        <p className="kicker">Короткая практика · 7–10 минут</p>
        <h1 ref={headingRef} id="test-title" tabIndex={-1}>На что Вы можете опереться сейчас?</h1>
        <p className="testIntroLead">Эта практика поможет увидеть Ваши сильные стороны и определить направление, которому сейчас стоит уделить больше внимания.</p>
        <div className="testFacts" aria-label="Особенности практики">
          <span>Анонимно</span>
          <span>Без регистрации</span>
          <span>Без правильных ответов</span>
        </div>
        <div className="testInstruction">
          <strong>Как отвечать</strong>
          <p>Оцените, насколько каждое утверждение похоже на Вашу жизнь в последние шесть месяцев. Отвечайте исходя из того, как бывает на самом деле, а не как хотелось бы.</p>
        </div>
        <div className="testIntroActions">
          <button className="btn primary" type="button" onClick={onStart}>
            {hasProgress ? 'Продолжить' : 'Начать'}
          </button>
          {hasProgress ? <button className="testTextButton" type="button" onClick={onRestart}>Начать заново</button> : null}
        </div>
        <p className="testDisclaimer">Это авторская практика саморефлексии, основанная на шести измерениях психологического благополучия. Она не является медицинской или психологической диагностикой.</p>
      </div>
      <div className="testIntroVisual" aria-hidden="true">
        <span className="testCircle circleOne" />
        <span className="testCircle circleTwo" />
        <span className="testCircle circleThree" />
        <span className="testCompass">6</span>
        <p>сфер<br />жизни</p>
      </div>
    </section>
  )
}

function TestResult({
  headingRef,
  strengths,
  attention,
  shareStatus,
  onShare,
  onRestart
}: {
  headingRef: React.RefObject<HTMLHeadingElement | null>
  strengths: [TestDomain, TestDomain]
  attention: TestDomain
  shareStatus: string
  onShare: () => void
  onRestart: () => void
}) {
  return (
    <section className="testResult" aria-labelledby="result-title">
      <div className="testResultHero">
        <p className="kicker">Ваш личный результат</p>
        <h1 ref={headingRef} id="result-title" tabIndex={-1}>Ваши точки опоры</h1>
        <p>Это не оценка и не диагноз. Результат показывает, на что Вы уже можете опираться и где сейчас может быть особенно полезен следующий осознанный шаг.</p>
      </div>

      <div className="testStrengthGrid">
        {strengths.map((domain, index) => (
          <article className="testResultCard strength" key={domain.id}>
            <span>Точка опоры {index + 1}</span>
            <h2>{domain.title}</h2>
            <p>{domain.strength}</p>
          </article>
        ))}
      </div>

      <article className="testResultCard attention">
        <div>
          <span>Зона внимания</span>
          <h2>{attention.title}</h2>
          <p>{attention.attention}</p>
        </div>
        <div className="testNextStep">
          <strong>Один практический шаг</strong>
          <p>{attention.action}</p>
        </div>
      </article>

      <div className="testCourseOffer">
        <p className="kicker">Продолжить исследование</p>
        <h2>«Путь мужчины» — два месяца практики</h2>
        <p className="testCourseStart">Старт курса — {course.start}</p>
        <p>На курсе мы не даём готовых рецептов. Через разговор, опыт и взаимодействие каждый участник сможет глубже увидеть себя, свои отношения и определить следующий шаг. Участие — за добровольное пожертвование, без обязательной оплаты.</p>
        <div className="testCourseActions">
          <a className="btn secondary" href="/#program" data-analytics-event="TEST_COURSE_INFO" data-analytics-placement="test_result">Узнать о курсе</a>
          <a className="btn primary" href="/#registration" data-analytics-event="TEST_REGISTRATION" data-analytics-placement="test_result">Записаться на курс</a>
        </div>
      </div>

      <div className="testResultTools">
        <button className="testTextButton" type="button" onClick={onShare}>Поделиться тестом</button>
        <button className="testTextButton" type="button" onClick={onRestart}>Пройти ещё раз</button>
        <p className="testShareStatus" aria-live="polite">{shareStatus}</p>
      </div>
    </section>
  )
}
