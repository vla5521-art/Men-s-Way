import { course } from '../data/content'
import community from '../assets/community.webp'
import communityMobile from '../assets/community-mobile.webp'
import { Countdown } from './Countdown'

const icons = { calendar:'◫', clock:'◷', globe:'◎' }
export function Hero(){
  return <section className="hero" id="top">
    <div className="heroContent">
      <p className="eyebrow">{course.eyebrow}</p>
      <h1>{course.title}</h1>
      <p className="slogan">{course.slogan}</p>
      <p className="lead">{course.description}</p>
      <div className="facts">
        <Fact icon={icons.calendar} label="Старт" value={course.start}/>
        <Fact icon={icons.clock} label="Продолжительность" value={course.duration}/>
        <Fact icon={icons.globe} label="Формат" value={course.format}/>
      </div>
      <p className="support">◉ <span>{course.support}</span></p>
      <div className="heroCountdown"><span className="countdownLabel">До начала курса</span><Countdown/></div>
      <div className="heroActions"><a className="btn primary" href="#registration">Записаться на курс</a><a className="btn secondary" href="#program">Узнать о программе</a></div>
    </div>
    <div className="heroVisual" aria-hidden="true">
      <picture><source media="(max-width:700px)" srcSet={communityMobile}/><img src={community} alt="" /></picture>
      <div className="pathLine pathOne"/><div className="pathLine pathTwo"/>
    </div>
    <a className="scrollHint" href="#about" aria-label="Перейти к следующему разделу">↓</a>
  </section>
}
function Fact({icon,label,value}:{icon:string;label:string;value:string}){return <div className="fact"><span className="factIcon">{icon}</span><div><b>{label}</b><span>{value}</span></div></div>}
