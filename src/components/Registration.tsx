export function Registration() {
  return (
    <section className="registration" id="registration">
      <div className="sectionInner registrationGrid">
        <div>
          <p className="kicker">Путь мужчины</p>
          <h2>Регистрация</h2>
          <p>Выберите удобную площадку для участия. Ссылки на регистрацию будут добавлены в ближайшее время.</p>
        </div>
        <div className="registrationChoices" aria-label="Способы регистрации">
          <RegistrationPlaceholder platform="telegram" label="Участие в Telegram" />
          <RegistrationPlaceholder platform="vk" label="Участие в VK" />
        </div>
      </div>
    </section>
  )
}

function RegistrationPlaceholder({ platform, label }: { platform: 'telegram' | 'vk'; label: string }) {
  return (
    <button className={`registrationChoice ${platform}`} type="button" disabled aria-disabled="true">
      <PlatformIcon platform={platform} />
      <span className="registrationChoiceText">
        <strong>{label}</strong>
        <small>Ссылка скоро появится</small>
      </span>
    </button>
  )
}

function PlatformIcon({ platform }: { platform: 'telegram' | 'vk' }) {
  if (platform === 'telegram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.7 3.5 3.8 10c-1.2.5-1.2 1.1-.2 1.4l4.3 1.4 1.7 5.2c.2.7.1.9.7.9.5 0 .7-.2 1-.4l2.4-2.3 5 3.7c.9.5 1.6.3 1.8-.8l2.9-13.9c.3-1.3-.5-1.9-2.7-1.7Z" />
        <path d="m8 12.8 10.6-6.7c.5-.3 1-.1.6.3l-8.7 7.9-.3 3.5-2.2-5Z" className="platformIconDetail" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3.5 6.5h3.7c.3 0 .5.2.6.5.5 1.7 1.2 3.2 2.2 4.5.2.3.7.1.7-.2V7.8c0-.5-.2-.8-.8-1-.3-.1-.2-.3.1-.5.7-.3 1.7-.4 2.8-.4 1 0 1.4.4 1.4 1.3v4c0 .4.3.6.6.3 1.1-1.2 1.9-2.8 2.5-4.5.1-.3.3-.5.7-.5h3.7c.6 0 .8.3.6.8-.6 1.8-1.9 3.6-3.3 5.1-.3.3-.3.7 0 1 1.4 1.3 2.8 2.8 3.6 4.4.3.6 0 1-.6 1h-4.1c-.4 0-.7-.2-1-.5l-1.9-2.1c-.3-.3-.7-.1-.7.3v1.7c0 .4-.2.6-.6.6h-1.3c-4.7 0-8.6-4.5-10.3-11.4-.2-.6.1-.9.7-.9Z" />
    </svg>
  )
}
