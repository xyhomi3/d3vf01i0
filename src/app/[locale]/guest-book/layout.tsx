import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { FadeIn, FadeInStagger } from '@/components/atoms/fade-in'
import { SiGmail, SiLinkedin, SiThreads, SiX } from 'react-icons/si'

import { AsideLink } from '@/components/atoms/aside-link'
import { ENV } from '@/lib/env/constants'
import { SessionProvider } from 'next-auth/react'
import { Suspense } from 'react'
import { auth } from '@/lib/auth'
import { generateSEO } from '@/lib/generateSEO'

const title = 'guest-book'
const description =
  'Leave a lasting imprint on my digital canvas! Sign in and share your thoughts, greetings, or anecdotes on my guest-book page. Your messages contribute to the heart and soul of my online community. Connect with us through your words and be a part of the vibrant conversations happening on my website. Your messages matter, so take a moment to make your mark and be heard!'
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/guest-book`
const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`

export const metadata = generateSEO(title, description, image, url)

export default async function AboutLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
    <section className='grid grid-cols-12 overflow-hidden'>
      <aside className='md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto'>
        <Accordion type='single' collapsible defaultValue='item-0'>
          {data.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left' data-umami-event='accordion-guest-book'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='mt-5 space-y-1'>
                <FadeInStagger faster>
                  {item.list.map((listItem, j) => (
                    <FadeIn key={j}>
                      <Suspense fallback={<>Loading...</>}>
                        <AsideLink href={listItem.href} startWith='/about'>
                          <span className='shrink-0'>{listItem.icon}</span>
                          {listItem.title}
                        </AsideLink>
                      </Suspense>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </aside>
        <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto'>{children}</section>
    </section>
    </SessionProvider>
  )
}

const data = [
  {
    title: 'Contacts',
    list: [
      {
        title: 'Email',
        href: 'mailto:loua@0000.codes',
        icon: <SiGmail className='w-4 h-4' />
      },
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/lucien-loua',
        icon: <SiLinkedin className='w-4 h-4' />
      },
      {
        title: 'Twitter',
        href: 'https://twitter.com/xyhomi3',
        icon: <SiX className='w-4 h-4' />
      },
      {
        title: 'Thread',
        href: 'https://www.threads.net/@xyhomi3',
        icon: <SiThreads className='w-4 h-4' />
      }
    ]
  }
]
