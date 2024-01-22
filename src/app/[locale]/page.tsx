import { Badge } from '@/components/atoms/badge'
import { FadeIn } from '@/components/atoms/fade-in'
import { AnimatedName } from '@/components/molecules/animated-name'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

// export default function Home() {
  export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale)

  const t =  useTranslations('Home')


  return (
    <section className='flex items-center justify-center gap-20 p-5'>
      <FadeIn>
        <div className='md:space-y-10 space-y-8 relative z-10'>
          <header>
            <AnimatedName/>
            <h2 className='text-muted-foreground md:text-2xl sm:text-xl text-base align-middle items-center'>
              {/* <span className='animate-pulse'>&gt;_ </span> */}
              <Badge className='bg-gradient-to-r from-blue-500 to-gray-400 dark:bg-gradient-to-r dark:from-blue-700 dark:to-gray-600 text-secondary dark:text-gray-200 mr-3'>{t('job')}</Badge>
              <Badge className='bg-gradient-to-r from-orange-500 to-violet-500 dark:bg-gradient-to-r dark:from-orange-700 dark:to-violet-700 text-secondary dark:text-gray-200'>Sound Designer</Badge>
            </h2>

            <div className='absolute w-full h-1/2 bg-muted-foreground/10 blur-2xl top-0 left-0 -z-10 rounded-full animate-pulse' />
          </header>
          
        </div>
      </FadeIn>
      {/* <GridPattern
        className='absolute inset-x-0 -top-14 -z-10 h-full w-full dark:fill-secondary/20 fill-neutral-100 dark:stroke-secondary/30 stroke-neutral-700/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
        yOffset={-96}
        interactive
      /> */}
    </section>
  )
}
