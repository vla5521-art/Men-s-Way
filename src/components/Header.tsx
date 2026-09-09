import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo-dark.jpg'
import { navigation } from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.body.classList.toggle('menuOpen', open)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButtonRef.current?.focus()
      }

      if (event.key === 'Tab' && open && mobileMenuRef.current) {
        const focusable = Array.from(mobileMenuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
        const first = focusable[0]
        const last = focusable.at(-1)

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }

    if (open) mobileMenuRef.current?.querySelector<HTMLElement>('a[href]')?.focus()
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('menuOpen')
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Путь мужчины — перейти к началу страницы">
        <img src={logo} alt="Логотип курса Путь мужчины" />
      </a>
      <span className="versionBadge" aria-label="Версия сайта 2.0.1">v2.0.1</span>
      <nav className="nav" aria-label="Основная навигация">
        {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="headerCta" href="#registration">Записаться</a>
      <button
        ref={menuButtonRef}
        className={`menuBtn${open ? ' isOpen' : ''}`}
        type="button"
        aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        ref={mobileMenuRef}
        className={`mobileMenu${open ? ' isOpen' : ''}`}
        id="mobile-navigation"
        aria-label="Мобильная навигация"
        aria-hidden={!open}
      >
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        <a className="btn primary" href="#registration" onClick={closeMenu}>Записаться на курс</a>
      </nav>
    </header>
  )
}
