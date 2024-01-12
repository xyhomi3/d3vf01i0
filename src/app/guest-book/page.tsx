import { RemoveBtn, SendBtn } from './action-buttons'

import { Button } from '@/components/atoms/button'
import { FadeIn } from '@/components/atoms/fade-in'
import { Input } from '@/components/atoms/input'
import { LoginButton } from '@/components/molecules/auth/login-button'
import { LogoutButton } from '@/components/molecules/auth/logout-button'
import { auth } from '@/lib/auth'
import { createPost } from '@/lib/actions'
import { db } from '@/lib/prisma'

export default async function GuestBooks() {
  const session = await auth()
  const posts = await db.post.findMany({
    include: {
      user: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <FadeIn className='p-5 space-y-2'>
      <form action={createPost} className='col-span-full flex items-center justify-between gap-x-2.5'>
        <div className='flex-1 relative'>
          <Input name='desc' id='desc' placeholder='Your Message...' aria-labelledby='desc' />
        </div>

        {!session ? (
          <LoginButton asChild mode='modal'>
            <Button variant='secondary'>Sign in</Button>
          </LoginButton>
        ) : (
          <SendBtn />
        )}
        {!session ? '' : <LogoutButton />}
      </form>
      <article className='divide-y lg:divide-y-0'>
        {posts.map((item, i) => (
          <pre className='flex lg:flex-row flex-col items-start gap-x-2 py-2 lg:py-0 md:!text-sm text-xs' key={i}>
            <code className='text-muted-foreground lg:w-36 truncate shrink-0 flex items-center justify-between w-full gap-x-2'>
            <code className='transition-colors font-semibold bg-gradient-to-r to-[#00bef0]  from-primary bg-clip-text text-transparent'>{item.user.name}</code>
              <code className='text-muted-foreground shrink-0 flex items-center justify-center gap-x-2 lg:hidden'>
                {session?.user?.id === item.user.id && <RemoveBtn id={item.id} />}
                <code>
                  {item.createdAt
                    .toLocaleString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                    .replace(',', '')
                    .replace(/\//g, '-')}
                </code>
              </code>
            </code>
            <code className='hidden lg:block'>:</code>
            <code className='flex-1 whitespace-pre-line'>{item.desc}</code>
            <code className='text-muted-foreground shrink-0 lg:flex hidden items-center justify-center gap-x-2'>
              {session?.user?.id === item.user.id && <RemoveBtn id={item.id} />}
              <code>
                {item.createdAt
                  .toLocaleString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                  .replace(',', '')
                  .replace(/\//g, '-')}
              </code>
            </code>
          </pre>
        ))}
      </article>
    </FadeIn>
  )
}
