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

export function Sections() {
  return (
    <>
      <section className="section painSection" id="about">
        <div className="sectionInner">
          <SectionHeading
            kicker="Честный взгляд на себя"
            title="Возможно, ты узнаешь себя"
            text="Не обязательно находиться в кризисе, чтобы начать менять свою жизнь."
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
            title="Этот курс для тебя, если ты…"
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
            title="Точка старта — твоя текущая реальность"
          />
          <CardGrid items={startingPoints} />
        </div>
      </section>

      <section className="section contrastSection" aria-labelledby="contrast-title">
        <div className="sectionInner">
          <div className="sectionHeading">
            <p className="kicker">Два состояния</p>
            <h2 id="contrast-title">От жизни на автомате —<br />к осознанному движению</h2>
          </div>
          <div className="contrastGrid">
            <FlowCard title="Когда мужчина живёт на автомате" items={automaticState} tone="negative" />
            <FlowCard title="Когда мужчина понимает свою роль" items={consciousState} tone="positive" />
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

      <section className="section results" id="results">
        <div className="sectionInner">
          <SectionHeading
            kicker="Результат"
            title="После курса ты сможешь"
            text="Применять полученные знания в отношениях, решениях и повседневных действиях."
          />
          <div className="courseResultsGrid">
            {courseResults.map((item) => (
              <article className="resultCard" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="resultTrajectory">От ограничений и напряжения — к внутренней устойчивости, осмысленной жизни и духовному развитию.</p>
        </div>
      </section>

      <section className="section manifesto" aria-label="Главная идея курса">
        <div className="sectionInner">
          <p>Мужчина не обязан знать все ответы.</p>
          <h2>Но он должен быть готов задавать себе честные вопросы.</h2>
          <span>С этого начинается путь.</span>
        </div>
      </section>
    </>
  )
}

function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="sectionHeading">
      <p className="kicker">{kicker}</p>
      <h2 id={title === 'От жизни на автомате — к осознанному движению' ? 'contrast-title' : undefined}>{title}</h2>
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
