export type ContentCard = {
  title: string
  text?: string
}

export type ProgramModule = {
  number: string
  title: string
  topics: string[]
}

export const course = {
  title: 'Путь мужчины',
  eyebrow: 'Двухмесячный практический онлайн-курс',
  description:
    'Мы не будем Вас учить, как жить, а объединимся, чтобы видеть в любых событиях глубокие смыслы и потенциал масштаба мужского развития.',
  start: '22 сентября 2026 года',
  startAt: '2026-09-22T08:00:00+03:00',
  duration: '2 месяца',
  format: 'Онлайн'
}

export const navigation = [
  { label: 'О курсе', href: '#about' },
  { label: 'Программа', href: '#program' },
  { label: 'Результат', href: '#results' },
  { label: 'Регистрация', href: '#registration' }
]

export const startingPoints: ContentCard[] = [
  {
    title: 'От поиска внутренней опоры',
    text: 'К уверенности в каждом решении.'
  },
  {
    title: 'От недопонимания в семье и отношениях',
    text: 'К доверию.'
  },
  {
    title: 'От рутины и вызовов',
    text: 'К увлекательному пути побед.'
  }
]

export const programModules: ProgramModule[] = [
  {
    number: '01',
    title: 'Сила характера',
    topics: [
      'Два взгляда на трудности, новое восприятие вызовов',
      'Анатомия мужчины, скрытые уровни личности',
      'Аскезы как инструмент изменения состояния и укрепления воли',
      'Он и Она, как понимать природу друг друга'
    ]
  },
  {
    number: '02',
    title: 'Масштаб и реализация',
    topics: [
      'Четыре фундаментальные цели мужской жизни',
      'Ключевые роли мужчины',
      'Законы судьбы, как влиять на свое будущее',
      'Мастерство отношений на всех уровнях'
    ]
  }
]
