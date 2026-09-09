import { useEffect } from 'react'
import { initMetrika, reachGoal, saveAttribution } from '../services/analytics'

const observedSections = [
  { selector: '#program', goal: 'VIEW_PROGRAM' },
  { selector: '#registration', goal: 'VIEW_REGISTRATION' }
] as const

export function Analytics() {
  useEffect(() => {
    saveAttribution()
    initMetrika()

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>('[data-analytics-event]')
        : null

      if (!target) return

      reachGoal(target.dataset.analyticsEvent ?? '', {
        placement: target.dataset.analyticsPlacement ?? 'unknown'
      })
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue

        const section = observedSections.find(({ selector }) => entry.target.matches(selector))
        if (section) reachGoal(section.goal)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.35 })

    document.addEventListener('click', onClick)
    for (const { selector } of observedSections) {
      const element = document.querySelector(selector)
      if (element) observer.observe(element)
    }

    return () => {
      document.removeEventListener('click', onClick)
      observer.disconnect()
    }
  }, [])

  return null
}
