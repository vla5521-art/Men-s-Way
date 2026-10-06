import { registrationLinks } from '../data/content'

export function Registration() {
  return (
    <section className="registration" id="registration">
      <div className="sectionInner registrationGrid">
        <div>
          <p className="kicker">Путь мужчины</p>
          <h2>Регистрация</h2>
          <p>Выберите удобную площадку и перейдите к регистрации.</p>
        </div>
        <div className="registrationChoices" aria-label="Способы регистрации">
          <RegistrationLink platform="telegram" label="Участие в Telegram" href={registrationLinks.telegram} />
          <RegistrationLink platform="max" label="Участие в MAX" href={registrationLinks.vk} />
        </div>
      </div>
    </section>
  )
}

function RegistrationLink({
  platform,
  label,
  href
}: {
  platform: 'telegram' | 'max'
  label: string
  href: string
}) {
  return (
    <a
      className={`registrationChoice ${platform}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-event={platform === 'telegram' ? 'CLICK_TELEGRAM' : 'CLICK_MAX'}
      data-analytics-placement="registration"
    >
      <PlatformIcon platform={platform} />
      <span className="registrationChoiceText">
        <strong>{label}</strong>
        <small>Перейти к регистрации</small>
      </span>
    </a>
  )
}

function PlatformIcon({ platform }: { platform: 'telegram' | 'max' }) {
  if (platform === 'telegram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.7 3.5 3.8 10c-1.2.5-1.2 1.1-.2 1.4l4.3 1.4 1.7 5.2c.2.7.1.9.7.9.5 0 .7-.2 1-.4l2.4-2.3 5 3.7c.9.5 1.6.3 1.8-.8l2.9-13.9c.3-1.3-.5-1.9-2.7-1.7Z" />
        <path d="m8 12.8 10.6-6.7c.5-.3 1-.1.6.3l-8.7 7.9-.3 3.5-2.2-5Z" className="platformIconDetail" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="maxBrandGradient" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#44ccff" />
          <stop offset=".662" stopColor="#5533ee" />
          <stop offset="1" stopColor="#9933dd" />
        </linearGradient>
        <radialGradient id="maxBrandGlow" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3) scale(2.42703433 1)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0000ff" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1000" height="1000" rx="249.681" fill="url(#maxBrandGradient)" />
      <rect width="1000" height="1000" rx="249.681" fill="url(#maxBrandGlow)" />
      <path fill="#fff" fillRule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clipRule="evenodd" />
    </svg>
  )
}
