const counterId = Number(import.meta.env.VITE_YANDEX_METRIKA_ID)
const attributionStorageKey = 'pm_attribution_v1'

type GoalParams = Record<string, string | number | boolean>

type MetrikaFunction = {
  (counter: number, method: 'init', options: Record<string, boolean>): void
  (counter: number, method: 'reachGoal', goal: string, params?: GoalParams): void
  a?: IArguments[]
  l?: number
}

declare global {
  interface Window {
    ym?: MetrikaFunction
  }
}

function isConfigured() {
  return Number.isInteger(counterId) && counterId > 0
}

export function initMetrika() {
  if (!isConfigured() || window.ym) return

  const ym = function (...args: Parameters<MetrikaFunction>) {
    ;(ym.a ??= []).push(arguments)
  } as MetrikaFunction

  ym.l = Date.now()
  window.ym = ym
  window.ym(counterId, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  })

  const loadScript = () => {
    if (document.querySelector('script[data-yandex-metrika]')) return

    const script = document.createElement('script')
    script.async = true
    script.dataset.yandexMetrika = 'true'
    script.src = 'https://mc.yandex.ru/metrika/tag.js'
    document.head.append(script)
  }

  if (document.readyState === 'complete') loadScript()
  else window.addEventListener('load', loadScript, { once: true })
}

export function reachGoal(goal: string, params?: GoalParams) {
  if (!isConfigured() || !goal) return
  window.ym?.(counterId, 'reachGoal', goal, params)
}

export function saveAttribution() {
  const query = new URLSearchParams(window.location.search)
  const attribution = Object.fromEntries(
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
      .map((key) => [key, query.get(key)])
      .filter((entry): entry is [string, string] => Boolean(entry[1]))
  )

  if (Object.keys(attribution).length === 0) return

  try {
    localStorage.setItem(attributionStorageKey, JSON.stringify({
      ...attribution,
      landing_page: window.location.pathname,
      captured_at: new Date().toISOString()
    }))
  } catch {
    // Метрика продолжит работать, даже если браузер запретил localStorage.
  }
}
