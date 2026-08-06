import {
  audienceCards,
  communityPillars,
  contacts,
  faqItems,
  finalMonth,
  formatCards,
  programTopics,
  recognitionCards,
  recommendedFilms,
  registrationSteps,
  resultCards,
  sectionVisibility,
  socialNetworks,
  values,
  type ContentCard,
  type SocialNetworkId
} from '../data/content'

export function Sections() {
  return (
    <>
      <section className="section recognition" id="about">
        <div className="sectionInner">
          <SectionHeading
            kicker="Знакомые вопросы"
            title="Возможно, пришло время яснее увидеть свой путь"
            text="Иногда внешне всё выглядит благополучно, но внутри остается ощущение, что важные вопросы до сих пор не получили ответа. Не всегда понятно, на что опираться, куда двигаться и как соединить разные стороны жизни в единое целое."
          />
          <CardGrid items={recognitionCards} />
          <p className="sectionConclusion">
            Курс не предлагает готовых ответов на все жизненные вопросы. Он создает пространство, в котором мужчина может глубже разобраться в себе, своих отношениях и направлении дальнейшего развития.
          </p>
        </div>
      </section>

      <section className="section idea">
        <div className="sectionInner split">
          <div>
            <p className="kicker">Главная идея курса</p>
            <h2>Мужской путь начинается не с внешнего успеха</h2>
          </div>
          <div className="prose">
            <p>Можно выглядеть успешным, выполнять обязанности и добиваться поставленных целей, но при этом не понимать, на что опирается твоя жизнь и ради чего ты движешься вперед.</p>
            <p>«Путь мужчины» — это последовательное изучение тем, связанных с природой мужчины, зрелостью, ответственностью, отношениями и предназначением.</p>
            <p>Задача курса — не создать очередной образ «идеального мужчины», а помочь участнику осмыслить свою роль, жизненные ориентиры и принципы, которыми он руководствуется в решениях и отношениях.</p>
            <p>Знания рассматриваются не как теория, а как основа для наблюдения за собой, обсуждения и применения в повседневной жизни.</p>
          </div>
        </div>
        <Quote>Не доказывать свою силу, а понимать, на что ее направлять.</Quote>
      </section>

      <section className="section" id="audience">
        <div className="sectionInner">
          <SectionHeading
            kicker="Для кого создан курс"
            title="Курс для мужчин, которые хотят двигаться осознанно"
            text="Для участия не требуется проходить предыдущие программы или иметь специальную подготовку. Важно желание учиться, размышлять и применять полученные знания в жизни."
          />
          <CardGrid items={audienceCards} />
        </div>
      </section>

      <section className="section program" id="program">
        <div className="sectionInner">
          <SectionHeading
            kicker="Программа курса"
            title="Последовательный путь от понимания себя к пониманию своей роли"
            text="Программа объединяет ключевые темы, которые помогают мужчине рассмотреть внутренний успех, отношения, ответственность, лидерство, время и значение наставничества."
          />
          <div className="topicGrid">
            {programTopics.map((topic) => (
              <article className="topic" key={topic.number}>
                <span>{topic.number}</span>
                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="programExtras">
            <div className="finalMonth">
              <div>
                <p className="kicker">Заключительный месяц</p>
                <h3>Дополнительные темы</h3>
              </div>
              <div className="chips">{finalMonth.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <div className="films">
              <p className="kicker">Рекомендуемые фильмы</p>
              <ul>{recommendedFilms.map((film) => <li key={film}>{film}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section results">
        <div className="sectionInner">
          <SectionHeading
            kicker="Что получает участник"
            title="Не готовые рецепты, а более ясную позицию"
            text="Результат обучения зависит от участия самого человека и от того, насколько внимательно он применяет полученные знания. Курс не обещает жизнь без трудностей, но помогает иначе смотреть на привычные ситуации и собственную роль в них."
          />
          <CardGrid items={resultCards} />
        </div>
      </section>

      <section className="section" id="format">
        <div className="sectionInner">
          <SectionHeading
            kicker="Как проходит обучение"
            title="Обучение, которое становится частью жизни"
            text="Курс проходит полностью онлайн и объединяет живые встречи, самостоятельное осмысление материала и общение в сообществе."
          />
          <CardGrid items={formatCards} />
          <p className="sectionConclusion">Онлайн-формат позволяет участвовать из любого места, сохраняя живое взаимодействие с группой.</p>
        </div>
      </section>

      <section className="section community">
        <div className="sectionInner">
          <div className="split">
            <div>
              <p className="kicker">Наставничество и сообщество</p>
              <h2>Свой путь не обязательно проходить в одиночку</h2>
            </div>
            <div className="prose">
              <p>Самостоятельность важна, но развитие редко происходит только благодаря книгам и личным размышлениям.</p>
              <p>Другие участники помогают увидеть знакомые вопросы с новой стороны. Кураторы поддерживают образовательный процесс. Более опытные люди могут показать направление, которое трудно заметить самостоятельно.</p>
              <p>Сообщество не снимает с участника ответственность за собственную жизнь. Напротив, оно создает среду, в которой легче задавать честные вопросы, проверять свое понимание и переводить знания в действия.</p>
            </div>
          </div>
          <CardGrid items={communityPillars} columns={3} />
        </div>
        <Quote>Не искать человека, который пройдет путь вместо тебя, а идти рядом с теми, кто помогает не потерять направление.</Quote>
      </section>

      <section className="section values">
        <div className="sectionInner">
          <SectionHeading kicker="Ценности проекта" title="Принципы, на которых строится обучение" />
          <div className="valueGrid">
            {values.map((value, index) => (
              <article className="value" key={value.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section donation" id="donation">
        <div className="sectionInner donationInner">
          <div>
            <p className="kicker">Условия участия</p>
            <h2>Участие в курсе — за добровольное пожертвование</h2>
          </div>
          <div className="donationText">
            <p>Проект развивается благодаря добровольной поддержке участников. Пожертвование помогает организовывать обучение, проводить живые встречи, сопровождать группы и создавать новые образовательные программы.</p>
            <p>Размер пожертвования участник определяет самостоятельно, исходя из своих возможностей и понимания ценности обучения.</p>
            <strong>Пожертвование — это не покупка обещанного результата, а осознанный вклад в обучение и развитие проекта.</strong>
            <a className="btn primary" href="#registration">Оставить заявку</a>
          </div>
        </div>
      </section>

      {sectionVisibility.teachers ? <section aria-label="Преподаватели" /> : null}
      {sectionVisibility.testimonials ? <section aria-label="Отзывы" /> : null}

      <section className="section faq" id="faq">
        <div className="sectionInner">
          <SectionHeading kicker="Частые вопросы" title="Что важно знать до старта" />
          <div className="faqList">
            {faqItems.map((item) => (
              <details key={item.title}>
                <summary>{item.title}</summary>
                <p>{item.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section steps">
        <div className="sectionInner">
          <SectionHeading kicker="Регистрация" title="Как присоединиться к курсу" />
          <div className="cards three stepCards">
            {registrationSteps.map((step, index) => <Card key={step.title} item={step} number={`Шаг ${index + 1}`} />)}
          </div>
          <a className="btn primary sectionButton" href="#registration">Оставить заявку</a>
        </div>
      </section>

      <section className="section contacts" id="contacts">
        <div className="sectionInner">
          <SectionHeading kicker="Контакты" title="Остались вопросы?" text={contacts.intro} />
          <div className="contactCountries">
            {contacts.groups.map((group) => <ContactCountry key={group.title} title={group.title} items={group.items} />)}
          </div>
          {sectionVisibility.socialNetworks ? (
            <div className="socialBlock">
              <div>
                <p className="kicker">Социальные сети</p>
                <h3>Следите за новостями проекта</h3>
                <p>Анонсы встреч, материалы и новости образовательных проектов публикуются в наших сообществах.</p>
              </div>
              <div className="socialGrid">
                {socialNetworks.map((network) => (
                  <a
                    key={network.id}
                    href={network.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${network.label} — открыть сообщество в новой вкладке`}
                  >
                    <SocialIcon id={network.id} />
                    {network.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}

function SocialIcon({ id }: { id: SocialNetworkId }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true
  }

  if (id === 'telegram') return <svg {...common}><path d="M21 3 3.8 10.1c-1.2.5-1.2 1.2-.2 1.5L8 13l1.7 5.3c.2.7.1 1 .8 1 .5 0 .8-.2 1-.4l2.5-2.4 5.1 3.8c.9.5 1.6.3 1.8-.9L24 4.6C24.3 3.3 23.5 2.7 21 3Z" /></svg>
  if (id === 'instagram') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  if (id === 'youtube') return <svg {...common}><path d="M22 12s0-3.4-.4-5c-.2-1-1-1.8-2-2C17.9 4.5 12 4.5 12 4.5s-5.9 0-7.6.5c-1 .2-1.8 1-2 2C2 8.6 2 12 2 12s0 3.4.4 5c.2 1 1 1.8 2 2 1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5c1-.2 1.8-1 2-2 .4-1.6.4-5 .4-5Z" /><path d="m10 9 5 3-5 3Z" /></svg>
  return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m10 9 5 3-5 3Z" /></svg>
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

function CardGrid({ items, columns = 3 }: { items: ContentCard[]; columns?: 3 }) {
  return (
    <div className={`cards columns-${columns}`}>
      {items.map((item, index) => <Card key={item.title} item={item} number={String(index + 1).padStart(2, '0')} />)}
    </div>
  )
}

function Card({ item, number }: { item: ContentCard; number: string }) {
  return (
    <article className="card">
      <span>{number}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  )
}

function Quote({ children }: { children: string }) {
  return <p className="sectionQuote">{children}</p>
}

function ContactCountry({
  title,
  items
}: {
  title: string
  items: Array<{ name: string; phone: string; href: string }>
}) {
  return (
    <div className="contactCountry">
      <h3>{title}</h3>
      {items.map((item) => (
        <div className="contactRow" key={item.name}>
          <strong>{item.name}</strong>
          <a href={item.href}>{item.phone}</a>
        </div>
      ))}
    </div>
  )
}
