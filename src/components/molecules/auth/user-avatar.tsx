import { Avatar, AvatarFallback, AvatarImage } from '../../atoms/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../../atoms/dropdown-menu'

import { Button } from '@/components/atoms/button'
import { Loader2 } from 'lucide-react'
import { SignIn } from './signin'
import { SignOut } from './signout'
import { auth } from '@/lib/auth'

const messages = ['Yo!', 'Hey!', 'Sup?', 'Hi', 'Hello', 'Welcome']

export default async function UserAvatar() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]

  const session = await auth()
  if (!session?.user)
    return (
      <SignIn asChild mode='modal'>
        <Button variant='secondary'>Sign in</Button>
      </SignIn>
    )
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative w-7 h-7 rounded-full'>
          <Avatar className='rounded-md'>
            {session.user.image && <AvatarImage src={session.user.image} alt={session.user.name ?? ''} />}
            <AvatarFallback>
              <Loader2 size={15} className='animate-spin text-muted-foreground transition-all' />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col p-3 gap-3' align='end' forceMount>
        <DropdownMenuLabel className='font-normal p-0'>
          <div className='flex flex-col space-y-2 w-full'>
            <p className='text-sm font-medium leading-0 bg-gradient-to-r from-cyan-700 to-lime-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-lime-400 bg-clip-text text-transparent text-center'>
              {randomMessage} {session.user.name?.split(' ')[0]}
            </p>
            <code className='text-xs leading-none text-muted-foreground text-center border p-3 rounded-md bg-muted'>
              <span className='animate-pulse font-bol bg-gradient-to-r from-cyan-700 to-lime-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-lime-400 bg-clip-text text-transparent'>{'>_ '}</span> happy Coding !
            </code>
          </div>
        </DropdownMenuLabel>

        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
