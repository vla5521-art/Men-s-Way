import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sections } from './components/Sections'
import { Registration } from './components/Registration'
import './styles/global.css'

export default function App(){return <><Header/><main><Hero/><Sections/><Registration/><section className="finalCta"><div className="sectionInner"><p className="kicker">Путь мужчины</p><h2>Свой путь. Не в одиночку.</h2><a className="btn primary" href="#registration">Записаться на курс</a></div></section></main><footer><div className="sectionInner"><span>© 2026 «Путь мужчины»</span><a href="#top">Наверх ↑</a></div></footer></>}
