'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { FadeIn, FadeInStagger } from '@/components/atoms/fade-in'
import { SiAtom, SiBitcoin, SiMdbook, SiMusicbrainz, SiOpenaccess, SiReact, SiReadme } from 'react-icons/si';

import { AsideLink } from '@/components/atoms/aside-link'
import { Suspense } from 'react'
import { useParams } from 'next/navigation'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  const params = useParams()
  if (params.slug) return children

  return (
    <section className='grid grid-cols-12 overflow-hidden h-full'>
      <aside className='md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto'>
        <Accordion type='single' collapsible defaultValue='item-0'>
          {TAGS.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left' data-umami-event='accordion-articles'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='mt-5 space-y-1'>
                <FadeInStagger faster>
                  {item.list.map((listItem, j) => (
                    <FadeIn key={j}>
                      <Suspense fallback={<>Loading...</>}>
                        <AsideLink href={listItem.href} startWith='/projects' title={listItem.title}>
                          <listItem.icon className='w-4 h-4' />
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
      <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84vh] md:h-auto'>{children}</section>
    </section>
  )
}

const TAGS = [
  {
    title: 'Article Tags',
    list: [
      {
        title: 'All article',
        href: '/articles',
        icon: SiMdbook
      },
      {
        title: 'Music',
        href: '/articles?tag=react',
        icon: SiMusicbrainz
      },
      {
        title: 'Open Source',
        href: '/articles?tag=op',
        icon: SiOpenaccess
      },
      {
        title: 'Cryptos',
        href: '/articles?tag=cryptos',
        icon: SiBitcoin
      },
      {
        title: 'Life',
        href: '/articles?tag=life',
        icon: SiAtom
      }
    ]
  }
]
