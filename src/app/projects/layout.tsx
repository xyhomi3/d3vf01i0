import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { FadeIn, FadeInStagger } from '@/components/atoms/fade-in'
import { SiJavascript, SiNextdotjs, SiReact, SiSass, SiTypescript, SiVite } from 'react-icons/si'

import { AsideLink } from '@/components/atoms/aside-link'
import { ENV } from '@/lib/constants'
import { HiTerminal } from 'react-icons/hi'
import { Suspense } from 'react'
import { generateSEO } from '@/lib/generateSEO'

const title = 'Projects'
const description =
  'Elevate your digital experience with a seamless blend of creativity and technical finesse.'
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/projects`
const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`

export const metadata = generateSEO(title, description, image, url)

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid grid-cols-12 overflow-hidden h-full'>
      <aside className='md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto'>
        <Accordion type='single' collapsible defaultValue='item-0'>
          {data.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left' data-umami-event='accordion-project'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='mt-5 space-y-1'>
                <FadeInStagger faster>
                  {item.list.map((listItem, j) => (
                    <FadeIn key={j}>
                      <Suspense fallback={<>Loading...</>}>
                        <AsideLink href={listItem.href} startWith='/projects' title={listItem.title}>
                          {listItem.icon}
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
  )
}

const data = [
  {
    title: 'Projects',
    list: [
      {
        title: 'All Projects',
        href: '/projects',
        icon: <HiTerminal className='w-4 h-4' />
      },
      {
        title: 'React',
        href: '/projects?tag=React',
        icon: <SiReact className='w-4 h-4' />
      },
      {
        title: 'Next',
        href: '/projects?tag=Next',
        icon: <SiNextdotjs className='w-4 h-4' />
      },
      {
        title: 'Vite',
        href: '/projects?tag=Vite',
        icon: <SiVite className='w-4 h-4' />
      },
      {
        title: 'JavaScript',
        href: '/projects?tag=Js',
        icon: <SiJavascript className='w-4 h-4' />
      },
      {
        title: 'TypeScript',
        href: '/projects?tag=Ts',
        icon: <SiTypescript className='w-4 h-4' />
      },
    ]
  }
]
