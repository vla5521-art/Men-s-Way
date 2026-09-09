import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Registration } from './components/Registration'
import { Sections } from './components/Sections'
import './styles/global.css'

export default function App() {
  return (
    <>
      <a className="skipLink" href="#main-content">Перейти к содержанию</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Sections />
        <Registration />
        <section className="finalCta">
          <div className="sectionInner">
            <p className="kicker">Путь мужчины</p>
            <h2>Готов начать с честного вопроса?</h2>
            <p>Включайся в практическую работу над характером, отношениями, масштабом и направлением своей жизни.</p>
            <a className="btn primary" href="#registration">Записаться на курс</a>
            <span>Старт — 5 октября 2026 года. Формат — онлайн.</span>
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
