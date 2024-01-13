import { Card, CardContent, CardHeader } from '@/components/atoms/card'

import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { SignIn } from './signin'

export const ErrorCard = () => {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader className='flex flex-row gap-5 items-center justify-center border-b'>
        <AlertTriangle className='text-red-500' /> 00ps! Something went wrong!
      </CardHeader>

      <CardContent className='flex w- items-center justify-center p-3'>
        <SignIn mode='redirect' asChild>
          <Button variant='secondary'>Try again</Button>
        </SignIn>
      </CardContent>
    </Card>
  )
}
