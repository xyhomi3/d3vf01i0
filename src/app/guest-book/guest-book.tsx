import { FadeIn } from '@/components/atoms/fade-in'
import { Input } from '@/components/atoms/input'
import { RemovePost } from '@/components/molecules/post/remove'
import { SendPost } from '@/components/molecules/post/send'
import UserAvatar from '@/components/molecules/auth/user-avatar'
import { auth } from '@/lib/auth'
import { createPost } from '@/lib/actions'
import { db } from '@/lib/db/prisma'

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
        {session?.user && <SendPost/>}
        <UserAvatar/>
      </form>
      <article className='divide-y lg:divide-y-0 p-1'>
        {posts.map((item, i) => (
          <pre className='flex lg:flex-row flex-col items-start gap-x-2 py-2 lg:py-3 md:!text-sm text-xs' key={i}>
            <code color='red' className='text-muted-foreground lg:w-36 truncate shrink-0 flex items-center justify-between w-full gap-x-2 font-bold'>
              <code className='transition-colors bg-gradient-to-r to-[#00bef0] from-primary bg-clip-text text-transparent'>{item.user.name}</code>

              <code className='text-muted-foreground shrink-0 flex items-center justify-center gap-x-2 lg:hidden'>
                {session?.user?.id === item.user.id && <RemovePost id={item.id} />}
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
            <code className='hidden lg:block font-bold'>{">_"}</code>
            <code className='flex-1 whitespace-pre-line text-muted-foreground'>{item.desc}</code>
            <code className='text-muted-foreground shrink-0 lg:flex hidden items-center justify-center gap-x-2'>
              {session?.user?.id === item.user.id && <RemovePost id={item.id} />}
              <code>
                {item.createdAt
                  .toLocaleString('fr-FR', {
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