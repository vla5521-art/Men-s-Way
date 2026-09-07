import {
  programModules,
  resultCards,
  startingPoints,
  type ContentCard
} from '../data/content'

export function Sections() {
  return (
    <>
      <section className="section recognition" id="about">
        <div className="sectionInner">
          <SectionHeading
            kicker="С чего мы начнём курс"
            title="Точка старта — Ваша текущая реальность"
          />
          <CardGrid items={startingPoints} />
        </div>
      </section>

      <section className="section program" id="program">
        <div className="sectionInner">
          <SectionHeading
            kicker="Программа курса"
            title="Два месяца практической работы"
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
            kicker="Включайтесь"
            title="Вместе мы пройдём прорывной путь"
            text="От ограничений и напряжения — к внутренней устойчивости, осмысленной жизни и духовному развитию."
          />
          <CardGrid items={resultCards} />
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
      {items.map((item, index) => (
        <article className="card" key={item.title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{item.title}</h3>
          {item.text ? <p>{item.text}</p> : null}
        </article>
      ))}
    </div>
  )
}
