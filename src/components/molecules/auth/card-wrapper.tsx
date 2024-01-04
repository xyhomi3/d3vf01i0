'use client'

import { Card, CardContent, CardHeader } from '@/components/atoms/card'

import { Social } from './social'

interface CardWrapperProps {
  showSocial?: boolean
  headerLabel: string
}

export const CardWrapper = ({ headerLabel, showSocial }: CardWrapperProps) => {
  return (
    <Card className='min-w-[270px] shadow-md'>
      <CardHeader className='text-center'>{headerLabel}</CardHeader>
      {showSocial && (
        <CardContent>
          <Social />
        </CardContent>
      )}
    </Card>
  )
}
