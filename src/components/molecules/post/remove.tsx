"use client"

import { Loader2, X } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/atoms/tooltip'

import { deletePost } from '@/lib/actions'
import { useState } from 'react'

export const RemovePost = ({ id }: { id: number }) => {
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