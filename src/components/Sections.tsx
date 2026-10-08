import { courseSteps } from '../data/content'
import alexanderHakimov from '../assets/alexander-hakimov-transparent.webp'
import communityPhoto from '../assets/community-team.webp'
import marinaTargakova from '../assets/marina-targakova-transparent.webp'
import razumLifeLogo from '../assets/razum-life-logo.webp'
import sergeyAvakov from '../assets/sergey-avakov-transparent.webp'

const speakers = [
  {
    name: 'Александр Хакимов',
    image: alexanderHakimov,
    description: 'Известный в России и за рубежом специалист по ведической культуре, писатель, психолог, философ, проповедник, обладатель премии «На благо мира», автор и ведущий международных лекций и семинаров.'
  },
  {
    name: 'Марина Таргакова',
    image: marinaTargakova,
    description: 'Психотерапевт мирового уровня, автор книг и семинаров на тему семейных взаимоотношений и воспитания детей, президент общественного объединения «Razum Life».'
  },
  {
    name: 'Сергей Аваков',
    image: sergeyAvakov,
    description: 'Психолог; профессиональный коуч-консультант по личностному развитию; автор и ведущий популярных тренингов и семинаров; писатель; сооснователь и наставник бизнес-клуба «Артха»; руководитель ретрит-центра; награжден почетным званием «Рыцарь гуманной педагогики»; отец 6 детей.'
  }
]

export function Sections() {
  return (
    <>
      <section className="section stepsSection" id="program" aria-labelledby="program-title">
        <div className="sectionInner">
          <div className="sectionHeading">
            <h2 className="programTitle" id="program-title">
              <span>Любой путь</span>{' '}
              <span>начинается с</span>{' '}
              <span>первого шага!</span>
            </h2>
          </div>
          <div className="courseSteps">
            {courseSteps.map((step) => (
              <article className="courseStep" key={step.number}>
                <p>Шаг {step.number}</p>
                <h3>{step.title}</h3>
                <dl>
                  <div><dt>Старт</dt><dd>{step.start}</dd></div>
                  <div><dt>Финиш</dt><dd>{step.finish}</dd></div>
                </dl>
                <ul className="stepTopics">
                  {step.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
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
              <article className="speakerProfile" key={speaker.name}>
                <div className="speakerCard">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                  />
                  <h3>{speaker.name}</h3>
                </div>
                {speaker.description && (
                  <p className="speakerDescription">{speaker.description}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testInvitation" id="test" aria-labelledby="test-invitation-title">
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

      <section className="section provenanceSection" id="razum-life" aria-labelledby="razum-life-title">
        <div className="sectionInner provenancePanel">
          <div className="provenanceLogo" aria-hidden="true">
            <img src={razumLifeLogo} alt="" />
          </div>
          <div className="provenanceContent">
            <p className="kicker">Среда, из которой вырос курс</p>
            <h2 id="razum-life-title">
              <span className="courseName">«Путь мужчины»</span>
              <span className="courseNameSeparator" aria-hidden="true"> —</span>{' '}
              <span className="communityPhrase">часть сообщества</span> Razum Life
            </h2>
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

    </>
  )
}

export function CommunityPhoto() {
  return (
    <section className="communityPhoto" aria-labelledby="community-photo-title">
      <img src={communityPhoto} alt="Команда проекта «Путь мужчины»" />
      <div className="communityPhotoOverlay">
        <div className="sectionInner">
          <p className="kicker">Путь рядом с теми, кто понимает</p>
          <h2 id="community-photo-title">Важные перемены начинаются с честного разговора и поддержки.</h2>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ kicker, title, text, id }: { kicker?: string; title: string; text?: string; id?: string }) {
  return (
    <div className="sectionHeading">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 id={id}>{title}</h2>
      {text ? <p className="sectionLead">{text}</p> : null}
    </div>
  )
}
