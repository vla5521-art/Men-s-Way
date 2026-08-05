export type RegistrationData = { name: string; contact: string; email: string; consent: boolean }

export async function submitRegistration(data: RegistrationData): Promise<void> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return
  }
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!response.ok) throw new Error('Не удалось отправить форму')
}
