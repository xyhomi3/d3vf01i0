"use client"

import { useLocalTime } from '@/hooks/useLocalTime'
import {useTranslations} from 'next-intl';

export default function LocalTime() {
  const localTime = useLocalTime()
  const t = useTranslations('Footer');

  return (
    <div className='items-center gap-x-2 px-2 py-1 h-7 md:flex hidden text-muted-foreground'>
      <p className='transition-colors bg-gradient-to-r bg-clip-text text-transparent from-cyan-700 to-lime-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-lime-400'><span className='font-semibold'>{t('clock')}</span> {localTime}</p>
    </div>
  )
}