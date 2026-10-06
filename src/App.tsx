import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Analytics } from './components/Analytics'
import { Cost } from './components/Cost'
import { Registration } from './components/Registration'
import { CommunityPhoto, Sections } from './components/Sections'
import { TestPage } from './components/TestPage'
import './styles/global.css'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/test') {
    return (
      <>
        <Analytics />
        <TestPage />
      </>
    )
  }

  return (
    <>
      <Analytics />
      <a className="skipLink" href="#main-content">Перейти к содержанию</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Sections />
        <Registration />
        <CommunityPhoto />
        <Cost />
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
