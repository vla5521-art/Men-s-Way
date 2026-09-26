import {
  audiencePoints,
  automaticState,
  consciousState,
  course,
  courseResults,
  painPoints,
  programModules,
  startingPoints,
  type ContentCard
} from '../data/content'
import razumLifeLogo from '../assets/razum-life-logo.webp'

export function Sections() {
  return (
    <>
      <section className="section painSection" id="about">
        <div className="sectionInner">
          <SectionHeading
            kicker="Честный взгляд на себя"
            title="Возможно, что-то из этого вам знакомо"
            text="Не обязательно ждать кризиса, чтобы внимательнее посмотреть на себя и свою жизнь."
          />
          <ul className="signalGrid">
            {painPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <p className="sectionConclusion">{course.description}</p>
        </div>
      </section>

      <section className="section audienceSection" id="for-whom">
        <div className="sectionInner audienceLayout">
          <SectionHeading
            kicker="Для кого этот курс"
            title="Этот курс для Вас, если Вы…"
            text="«Путь мужчины» — пространство, где можно остановиться, честно посмотреть на свою жизнь и понять, куда двигаться дальше."
          />
          <ul className="audienceList">
            {audiencePoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </section>

      <section className="section recognition" id="starting-point">
        <div className="sectionInner">
          <SectionHeading
            kicker="С чего мы начнём курс"
            title="Внимательный взгляд на свою жизнь"
          />
          <CardGrid items={startingPoints} />
        </div>
      </section>

      <section className="section contrastSection" aria-labelledby="contrast-title">
        <div className="sectionInner">
          <div className="sectionHeading">
            <p className="kicker">Два состояния</p>
            <h2 id="contrast-title">От привычных реакций —<br />к осознанному выбору</h2>
          </div>
          <div className="contrastGrid">
            <FlowCard title="Когда срабатывает привычный сценарий" items={automaticState} tone="negative" />
            <FlowCard title="Когда появляется пространство для выбора" items={consciousState} tone="positive" />
          </div>
        </div>
      </section>

      <section className="section program" id="program">
        <div className="sectionInner">
          <SectionHeading
            kicker="Программа курса"
            title="Два месяца практики"
          />
          <div className="moduleGrid">
            {programModules.map((module) => (
              <article className="moduleCard" key={module.number}>
                <div className="moduleHeading">
                  <span>Модуль {module.number}</span>
                  <h3>{module.title}</h3>
                </div>
                <ol>
                  {module.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testInvitation" aria-labelledby="test-invitation-title">
        <div className="sectionInner testInvitationPanel">
          <div className="testInvitationCopy">
            <p className="kicker">Короткая практика · 7–10 минут</p>
            <h2 id="test-invitation-title">На что Вы можете опереться сейчас?</h2>
            <p>27 вопросов помогут увидеть Ваши сильные стороны и определить направление, которому сейчас стоит уделить больше внимания.</p>
            <a className="btn primary" href="/test">Узнать свои точки опоры</a>
            <span>Анонимно · без регистрации · результат сразу</span>
          </div>
          <div className="testInvitationMark" aria-hidden="true">
            <strong>6</strong>
            <span>сфер<br />жизни</span>
          </div>
        </div>
      </section>

      <section className="section results" id="results">
        <div className="sectionInner">
          <SectionHeading
            kicker="Результат"
            title="К чему мы будем двигаться"
            text="Через знания, практику и их применение в отношениях, решениях и повседневных действиях."
          />
          <div className="courseResultsGrid">
            {courseResults.map((item) => (
              <article className="resultCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="resultTrajectory">К внутренней устойчивости, осмысленным решениям, более глубоким отношениям и духовному развитию.</p>
        </div>
      </section>

      <section className="section provenanceSection" aria-labelledby="razum-life-title">
        <div className="sectionInner provenancePanel">
          <div className="provenanceLogo" aria-hidden="true">
            <img src={razumLifeLogo} alt="" />
          </div>
          <div className="provenanceContent">
            <p className="kicker">Проект Razum Life</p>
            <h2 id="razum-life-title">«Путь мужчины» — проект Razum Life</h2>
            <p className="sectionLead">
              Razum Life — международное общественное движение и сообщество образовательных проектов,
              направленных на развитие личности, укрепление семьи и повышение качества жизни.
            </p>
            <a
              className="provenanceLink"
              href="https://razumlife.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Познакомиться с Razum Life — сайт откроется в новой вкладке"
            >
              Познакомиться с Razum Life <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section manifesto" aria-label="Главная идея курса">
        <div className="sectionInner">
          <p>Ответы становятся яснее, когда мужчина задаёт себе честные вопросы.</p>
          <h2>Путь начинается с готовности увидеть больше и сделать собственный выбор.</h2>
        </div>
      </section>
    </>
  )
}

function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="sectionHeading">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {text ? <p className="sectionLead">{text}</p> : null}
    </div>
  )
}

function CardGrid({ items }: { items: ContentCard[] }) {
  return (
    <div className="cards columns-3">
      {items.map((item) => (
        <article className="card" key={item.title}>
          <h3>{item.title}</h3>
          {item.text ? <p>{item.text}</p> : null}
        </article>
      ))}
    </div>
  )
}

function FlowCard({ title, items, tone }: { title: string; items: string[]; tone: 'negative' | 'positive' }) {
  return (
    <article className={`contrastCard ${tone}`}>
      <h3>{title}</h3>
      <ol className="flowList">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ol>
    </article>
  )
}
