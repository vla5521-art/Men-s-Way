import {
  automaticState,
  consciousState,
  course,
  courseResults,
  courseSteps,
  painPoints,
  programModules,
  startingPoints,
  type ContentCard
} from '../data/content'
import alexanderHakimov from '../assets/alexander-hakimov-transparent.webp'
import communityPhoto from '../assets/community-team.webp'
import marinaTargakova from '../assets/marina-targakova-transparent.webp'
import razumLifeLogo from '../assets/razum-life-logo.webp'
import sergeyAvakov from '../assets/sergey-avakov-transparent.webp'

const speakers = [
  { name: 'Александр Хакимов', image: alexanderHakimov },
  { name: 'Марина Таргакова', image: marinaTargakova },
  { name: 'Сергей Аваков', image: sergeyAvakov }
]

export function Sections() {
  return (
    <>
      <section className="section painSection" id="about">
        <div className="sectionInner aboutLayout">
          <div className="aboutContent">
            <SectionHeading
              kicker="Для кого этот курс"
              title="Возможно, этот курс для Вас"
              text="Не обязательно ждать кризиса, чтобы внимательнее посмотреть на себя, отношения и следующий этап жизни."
            />
            <ul className="signalGrid">
              {painPoints.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <p className="sectionConclusion">{course.description}</p>
          </div>
          <aside className="courseSteps" aria-label="Шаги курса">
            {courseSteps.map((step) => (
              <article className="courseStep" key={step.number}>
                <p>Шаг {step.number}</p>
                <h3>{step.title}</h3>
                <dl>
                  <div><dt>Старт</dt><dd>{step.start}</dd></div>
                  <div><dt>Финиш</dt><dd>{step.finish}</dd></div>
                </dl>
              </article>
            ))}
          </aside>
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

      <section className="section speakersSection" id="speakers">
        <div className="sectionInner">
          <SectionHeading
            title="Наставники проекта"
          />
          <div className="speakerGrid">
            {speakers.map((speaker) => (
              <article className="speakerCard" key={speaker.name}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                />
                <h3>{speaker.name}</h3>
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
            <p>Эта практика поможет увидеть Ваши сильные стороны и определить направление, которому сейчас стоит уделить больше внимания.</p>
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
            <p className="kicker">Среда, из которой вырос курс</p>
            <h2 id="razum-life-title">«Путь мужчины» — часть сообщества Razum Life</h2>
            <p className="sectionLead">
              Razum Life объединяет людей, которым важно жить осознанно, строить крепкие семьи и расти через честный диалог. Поэтому курс строится не вокруг готовых советов, а вокруг личной практики, общения и поддержки.
            </p>
            <p className="provenanceNote">Здесь мужчина может остановиться, поговорить о важном и увидеть свой следующий шаг рядом с теми, кому близки те же ценности.</p>
            <a
              className="provenanceLink"
              href="https://razumlife.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Узнать больше о Razum Life — сайт откроется в новой вкладке"
            >
              Узнать больше о Razum Life <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="communityPhoto" aria-labelledby="community-photo-title">
        <img src={communityPhoto} alt="Команда проекта «Путь мужчины»" />
        <div className="communityPhotoOverlay">
          <div className="sectionInner">
            <p className="kicker">Путь рядом с теми, кто понимает</p>
            <h2 id="community-photo-title">Важные перемены начинаются с честного разговора и поддержки.</h2>
          </div>
        </div>
      </section>
    </>
  )
}

function SectionHeading({ kicker, title, text }: { kicker?: string; title: string; text?: string }) {
  return (
    <div className="sectionHeading">
      {kicker ? <p className="kicker">{kicker}</p> : null}
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
