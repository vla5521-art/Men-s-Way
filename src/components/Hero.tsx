import masterHero from '../assets/master-hero.webp'
import heroScene from '../assets/hero-scene.webp'
import { course } from '../data/content'
import { Countdown } from './Countdown'

type FactIcon = 'calendar' | 'clock' | 'online'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroContent">
        <p className="eyebrow">Онлайн-курс</p>
        <h1>{course.title}</h1>
        <p className="slogan">Сила характера —<br />масштаб и реализация</p>
        <p className="lead">Для мужчин, которые хотят укрепить характер, разобраться в отношениях и увидеть направление дальнейшего развития.</p>
        <div className="heroActions">
          <a className="btn primary" href="#registration" data-analytics-event="REGISTRATION_INTENT" data-analytics-placement="hero">Записаться на курс</a>
          <a className="btn secondary" href="#about" data-analytics-event="COURSE_DETAILS" data-analytics-placement="hero">Узнать о курсе</a>
        </div>
        <div className="facts" aria-label="Параметры курса">
          <Fact icon="calendar" label="Старт" value={course.start} />
          <Fact icon="clock" label="Продолжительность" value={course.duration} />
          <Fact icon="online" label="Формат" value={course.format} />
        </div>
        <div className="heroCountdown">
          <span className="countdownLabel">До начала курса осталось</span>
          <Countdown />
          <p>Старт программы — 5 октября 2026 года.</p>
        </div>
      </div>
      <div className="heroVisual" aria-hidden="true">
        <picture>
          <source media="(min-width: 901px)" srcSet={heroScene} />
          <img src={masterHero} alt="" />
        </picture>
      </div>
    </section>
  )
}

function Fact({ icon, label, value }: { icon: FactIcon; label: string; value: string }) {
  return (
    <div className="fact">
      <span className="factIcon" aria-hidden="true"><FactIconGraphic icon={icon} /></span>
      <div><b>{label}</b><span>{value}</span></div>
    </div>
  )
}

function FactIconGraphic({ icon }: { icon: FactIcon }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    focusable: false
  }

  if (icon === 'calendar') {
    return <svg {...common}><rect x="3.5" y="5.5" width="17" height="15" rx="2" /><path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17" /><path d="M8 14h3M8 17h6" /></svg>
  }

  if (icon === 'clock') {
    return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
  }

  return <svg {...common}><rect x="3" y="4.5" width="18" height="12" rx="1.5" /><path d="M8.5 20h7M12 16.5V20" /><circle cx="12" cy="10.5" r="2.5" /><path d="M7.5 10.5h9M12 8c.7.7 1 1.5 1 2.5s-.3 1.8-1 2.5c-.7-.7-1-1.5-1-2.5s.3-1.8 1-2.5Z" /></svg>
}
