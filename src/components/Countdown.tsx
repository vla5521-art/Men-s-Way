import { useEffect, useMemo, useState } from 'react'
import { course } from '../data/content'

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number; started: boolean }

function calculateTimeLeft(target: number): TimeLeft {
  const remaining = Math.max(0, target - Date.now())
  if (remaining === 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true }

  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
    started: false
  }
}

export function Countdown() {
  const target = useMemo(() => new Date(course.startAt).getTime(), [])
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(target))

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(calculateTimeLeft(target)), 1_000)
    return () => window.clearInterval(timer)
  }, [target])

  if (timeLeft.started) {
    return <p className="countdownStarted" role="status">Курс уже начался</p>
  }

  const parts = [
    ['Дней', timeLeft.days],
    ['Часов', timeLeft.hours],
    ['Минут', timeLeft.minutes],
    ['Секунд', timeLeft.seconds]
  ] as const

  return <div className="countdown" role="timer" aria-label={`До начала курса: ${timeLeft.days} дней, ${timeLeft.hours} часов, ${timeLeft.minutes} минут, ${timeLeft.seconds} секунд`}>
    {parts.map(([label, value]) => <div className="countdownItem" key={label}>
      <strong>{String(value).padStart(2, '0')}</strong>
      <span>{label}</span>
    </div>)}
  </div>
}
