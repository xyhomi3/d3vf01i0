'use client'

import { Loader2, LogOut } from 'lucide-react'

import { Button } from '../../atoms/button'
import { signOut } from 'next-auth/react'
import { useState } from 'react'

interface LogoutButtonProps {
  children?: React.ReactNode
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    await signOut()
    setIsLoading(false)
  }

  return (
    <Button variant='outline' size='icon' onClick={handleSignOut} type='button' disabled={isLoading}>
      {isLoading ? <Loader2 size={15} className='animate-spin text-muted-foreground transition-all' /> : <LogOut size={15}/>}
    </Button>
  )
}