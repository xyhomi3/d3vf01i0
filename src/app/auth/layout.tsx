import { FadeIn, FadeInStagger } from '@/components/atoms/fade-in'

import { GridPattern } from '@/components/atoms/grid-pattern'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='h-full flex items-center justify-center'>
      <FadeInStagger faster>
        <FadeIn className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto'>{children}</FadeIn>

        <GridPattern
          className='absolute inset-x-0 -top-14 -z-10 h-full w-full dark:fill-secondary/20 fill-neutral-100 dark:stroke-secondary/30 stroke-neutral-700/5 '
          yOffset={-96}
          interactive
        />
      </FadeInStagger>
    </section>
  )
}

export default AuthLayout
