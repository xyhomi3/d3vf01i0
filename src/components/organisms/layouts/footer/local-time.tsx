"use client"

import { useEffect, useState } from 'react'

export default function LocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = { timeZone: 'Africa/Dakar', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTime(formatter.format(date));
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className='items-center gap-x-2 px-2 py-1 h-7 md:flex hidden text-muted-foreground'>
      <p className='transition-colors bg-gradient-to-r to-[#00bef0] from-primary bg-clip-text text-transparent'>Local time: {time}</p>
    </div>
  )
}