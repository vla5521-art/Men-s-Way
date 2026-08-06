import { type FormEvent, useState } from 'react'
import { submitRegistration } from '../services/form'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function Registration() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      setStatus('error')
      return
    }

    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || '').trim(),
      contact: String(formData.get('contact') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      consent: formData.get('consent') === 'on'
    }

    setStatus('loading')
    try {
      await submitRegistration(payload)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="registration" id="registration">
      <div className="sectionInner registrationGrid">
        <div>
          <p className="kicker">Заявка на участие</p>
          <h2>Сделайте следующий шаг</h2>
          <p>Оставьте свои контактные данные. Команда проекта свяжется с вами и расскажет о дальнейших организационных действиях.</p>
        </div>
        <form onSubmit={onSubmit} aria-label="Форма заявки на курс">
          <label htmlFor="registration-name">Ваше имя</label>
          <input id="registration-name" name="name" required autoComplete="name" />

          <label htmlFor="registration-contact">Телефон или Telegram</label>
          <input id="registration-contact" name="contact" required autoComplete="tel" />

          <label htmlFor="registration-email">Электронная почта</label>
          <input id="registration-email" name="email" type="email" required autoComplete="email" />

          <label className="consent" htmlFor="registration-consent">
            <input id="registration-consent" name="consent" type="checkbox" required />
            <span>Я соглашаюсь на обработку персональных данных.</span>
          </label>

          <button className="btn primary" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Отправляем…' : 'Оставить заявку'}
          </button>
          <div className="formStatus" aria-live="polite">
            {status === 'success' ? (
              <p className="success">Спасибо. Ваша заявка принята. Команда проекта свяжется с вами по указанным контактным данным.</p>
            ) : null}
            {status === 'error' ? (
              <p className="error">Не удалось отправить заявку. Проверьте введенные данные или повторите попытку позже.</p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  )
}
