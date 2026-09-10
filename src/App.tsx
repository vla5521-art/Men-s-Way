import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Analytics } from './components/Analytics'
import { Cost } from './components/Cost'
import { Registration } from './components/Registration'
import { Sections } from './components/Sections'
import { course } from './data/content'
import './styles/global.css'

export default function App() {
  return (
    <>
      <Analytics />
      <a className="skipLink" href="#main-content">Перейти к содержанию</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Sections />
        <Cost />
        <Registration />
        <section className="finalCta">
          <div className="sectionInner">
            <p className="kicker">Путь мужчины</p>
            <h2>Готовы начать с честного вопроса?</h2>
            <p>Включайтесь в практическую работу над характером, отношениями, масштабом и направлением своей жизни.</p>
            <a className="btn primary" href="#registration" data-analytics-event="REGISTRATION_INTENT" data-analytics-placement="final_cta">Записаться на курс</a>
            <span>Старт — {course.start}. Формат — {course.format.toLowerCase()}.</span>
          </div>
        </section>
      </main>
      <footer>
        <div className="sectionInner">
          <span>© 2026 «Путь мужчины»</span>
          <a href="#top">Наверх ↑</a>
        </div>
      </footer>
    </>
  )
}
