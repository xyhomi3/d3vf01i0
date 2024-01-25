// import { AnimatedName } from './animated-name'
import { Badge } from '../atoms/badge'
import { FadeIn } from '../atoms/fade-in'
import { Suspense } from 'react'
import { useTranslations } from 'next-intl'
const Infos = () => {
  const t = useTranslations('Home')

  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <span className='fixed z-30 bottom-12 left-5'>
        <FadeIn>
          <p className='font-light text-secondary dark:text-gray-200'>
            {t('greeting')}{' '}
            <span className='transition-colors bg-gradient-to-r bg-clip-text text-transparent from-slate-300 to-lime-400 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-lime-400'>
              Lucien
            </span>
          </p>

          <h2 className='text-muted-foreground md:text-2xl sm:text-xl text-base align-middle items-center'>
            <Badge className='text-secondary dark:text-gray-200 mr-3 backdrop-filter backdrop-blur bg-black bg-opacity-25'>{t('job')}</Badge>
            <Badge className='text-secondary dark:text-gray-200 backdrop-filter backdrop-blur bg-black bg-opacity-25'>Sound Designer</Badge>
          </h2>
          {/* <AnimatedName /> */}
          <div className='absolute w-full h-1/2 bg-muted-foreground/10 blur-2xl top-0 left-0 -z-10 rounded-full animate-pulse' />
        </FadeIn>
      </span>
    </Suspense>
  )
}

export default Infos
