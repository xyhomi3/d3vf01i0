'use client'

import { Loader2, X } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/atoms/tooltip'

import { Button } from '@/components/atoms/button'
import { deletePost } from '@/lib/actions'
import { signIn } from 'next-auth/react'
import { useFormStatus } from 'react-dom'
import { useState } from 'react'

export const SendBtn = () => {
  const { pending } = useFormStatus()
  return (
    <Button variant='secondary' type='submit' disabled={pending} data-umami-event='send-message'>
      Send Message
      {pending && <Loader2 className={`${pending ? 'w-4 ml-2' : 'w-0 ml-0'} h-4 animate-spin text-muted-foreground transition-all`} />}
    </Button>
  )
}

export const RemoveBtn = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    setIsLoading(true)
    await deletePost(id)
    setIsLoading(false)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button type='button' className='hover:text-destructive transition-colors' onClick={() => handleDelete()} data-umami-event='delete-message'>
            {isLoading ? <Loader2 size={15} className='animate-spin text-muted-foreground transition-all' /> : <X size={15} />}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Remove post</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

