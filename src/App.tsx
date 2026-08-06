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
            <h2>Путь становится яснее, когда начинаешь идти</h2>
            <p>Три месяца обучения, живых встреч и общения с людьми, для которых вопросы зрелости, ответственности и жизненного направления также имеют значение.</p>
            <p>Следующий шаг начинается с решения уделить этим вопросам внимание.</p>
            <a className="btn primary" href="#registration">Записаться на курс</a>
            <span>Старт — 20 сентября 2026 года. Формат — онлайн.</span>
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
