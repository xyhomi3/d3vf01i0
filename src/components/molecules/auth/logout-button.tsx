'use client'

import { Button } from '../../atoms/button'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

interface LogoutButtonProps {
  children?: React.ReactNode
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
 
  return (
    <Button variant='outline' size='icon' onClick={() => signOut()} type='button'>
      {children} <LogOut size={15}/>
    </Button>
  )
}
