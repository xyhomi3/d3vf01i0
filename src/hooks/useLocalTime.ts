import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export const useLocalTime = () => {
  const [time, setTime] = useState('')
    const t = useTranslations('Footer')
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date()
      const options: Intl.DateTimeFormatOptions = { timeZone: 'Africa/Dakar', hour: '2-digit', minute: '2-digit', second: '2-digit' }
      const formatter = new Intl.DateTimeFormat(t('time'), options)
      setTime(formatter.format(date))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return time
}
