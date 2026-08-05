import { useEffect, useState } from 'react'
import logo from '../assets/logo-dark.jpg'

export function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])
  const links = [['О курсе','#about'],['Программа','#program'],['Формат','#format'],['Регистрация','#registration']]
  return <header className="header">
    <a className="brand" href="#top" aria-label="Путь мужчины — на главную"><img src={logo} alt="Логотип курса Путь мужчины" /></a>
    <nav className="nav" aria-label="Основная навигация">{links.map(([t,h])=><a key={h} href={h}>{t}</a>)}</nav>
    <a className="headerCta" href="#registration">Записаться</a>
    <button className="menuBtn" aria-label="Открыть меню" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/><span/></button>
    {open && <div className="mobileMenu">{links.map(([t,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{t}</a>)}</div>}
  </header>
}
