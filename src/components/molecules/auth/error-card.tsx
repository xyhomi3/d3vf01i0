import { Card, CardContent, CardFooter, CardHeader } from '@/components/atoms/card'

import { AlertTriangle } from 'lucide-react'
import { BackButton } from '@/components/atoms/back-button'
import { Button } from '@/components/atoms/button'
import { LoginButton } from './login-button'
import { LuStopCircle } from 'react-icons/lu'

export const ErrorCard = () => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader className='flex flex-row gap-5 items-center justify-center border-b'>
        <AlertTriangle className='text-red-500' /> 00ps! Something went wrong!
      </CardHeader>

      <CardContent className='flex w- items-center justify-center p-3'>
        <LoginButton mode='redirect' asChild>
          <Button variant='secondary'>Try again</Button>
        </LoginButton>
      </CardContent>
      
    </Card>
  )
}
