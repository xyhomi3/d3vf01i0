import { CodeRoom } from '@/components/molecules/canvas'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  return (
    <section className='flex items-center justify-center place-content-center p-0 h-full w-full'>
      <CodeRoom />

      {/* <GridPattern
        className='absolute inset-x-0 -top-14 -z-10 h-full w-full dark:fill-secondary/20 fill-neutral-100 dark:stroke-secondary/30 stroke-neutral-700/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
        yOffset={-96}
        interactive
      /> */}
    </section>
  )
}
