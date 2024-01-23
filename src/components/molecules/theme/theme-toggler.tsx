'use client'

import * as React from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/atoms/alert-dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/atoms/dropdown-menu'
import { Moon, Sun, SunMoon } from 'lucide-react'

import { Button } from '@/components/atoms/button'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [isAlertDialogOpen, setIsAlertDialogOpen] = React.useState(false)

  const openAlertDialog = () => setIsAlertDialogOpen(true)
  const closeAlertDialog = () => setIsAlertDialogOpen(false)
  const t = useTranslations('Theme')
  const switchToLightMode = () => {
    setTheme('light')
    closeAlertDialog()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-visible:ring-0 h-7 w-7 items-center justify-center border-none focus:ring-0 focus:outline-none hover:bg-transparent rounded-none flex shrink-0'>
        <Moon size={15} className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <Sun size={15} className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        <span className='sr-only'>Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem data-umami-event='theme-toggle-light' onClick={openAlertDialog}>
          <Sun size={15} />
          <span className='pl-3'>{t('light')}</span>
        </DropdownMenuItem>
        <DropdownMenuItem data-umami-event='theme-toggle-dark' onClick={() => setTheme('dark')}>
          <Moon size={15} />
          <span className='pl-3'>{t('dark')}</span>
        </DropdownMenuItem>
        <DropdownMenuItem data-umami-event='theme-toggle-system' onClick={() => setTheme('system')}>
          <SunMoon size={15} />
          <span className='pl-3'>{t('system')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>

      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogTrigger className='hidden rounded-md'>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>💥 {t('alert')}</AlertDialogTitle>
              <AlertDialogDescription>{t('alert-message')}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
              <AlertDialogAction onClick={switchToLightMode}>{t('confirm')}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogTrigger>
      </AlertDialog>
    </DropdownMenu>
  )
}
