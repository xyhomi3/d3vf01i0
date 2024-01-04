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

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [isAlertDialogOpen, setIsAlertDialogOpen] = React.useState(false)

  const openAlertDialog = () => setIsAlertDialogOpen(true)
  const closeAlertDialog = () => setIsAlertDialogOpen(false)

  const switchToLightMode = () => {
    setTheme('light')
    closeAlertDialog()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size='icon'
          variant='outline'
          className='focus-visible:ring-0 h-7 border-none hover:bg-transparent rounded-none flex shrink-0'
          data-umami-event='theme-toggle'
        >
          <Moon size={15} className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Sun size={15} className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem data-umami-event='theme-toggle-light' onClick={openAlertDialog}>
          <Sun size={15} />
          <span className='pl-3'>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem data-umami-event='theme-toggle-dark' onClick={() => setTheme('dark')}>
          <Moon size={15} />
          <span className='pl-3'>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem data-umami-event='theme-toggle-system' onClick={() => setTheme('system')}>
          <SunMoon size={15} />
          <span className='pl-3'>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>

      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogTrigger className='hidden rounded-md'>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>💥 Flashbang Disclaimer</AlertDialogTitle>
              <AlertDialogDescription>Are you absolutely sure you want to switch to the light mode and unleash the flashbang?</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={switchToLightMode}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogTrigger>
      </AlertDialog>
    </DropdownMenu>
  )
}
