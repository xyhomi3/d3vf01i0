import { AnimatedName } from '@/components/molecules/animated-name'
import { FadeIn } from '@/components/atoms/fade-in'
import { GridPattern } from '@/components/atoms/grid-pattern'

export default function Home() {
  return (
    <section className='flex items-center justify-center gap-20 p-5'>
      <FadeIn>
        <div className='md:space-y-10 space-y-8 relative z-10'>
          <header>
            <p className='text-muted-foreground text-lg font-extralight'>Hi all. I am</p>
            <AnimatedName />
            <h2 className='text-muted-foreground md:text-2xl sm:text-xl text-base'>
              <span className='animate-pulse'>&gt; </span>
              Ux/Ui developer
            </h2>

            <div className='absolute w-full h-1/2 bg-muted-foreground/10 blur-2xl top-0 left-0 -z-10 rounded-full animate-pulse' />
          </header>
          
        </div>
      </FadeIn>
      <GridPattern
        className='absolute inset-x-0 -top-14 -z-10 h-full w-full dark:fill-secondary/20 fill-neutral-100 dark:stroke-secondary/30 stroke-neutral-700/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
        yOffset={-96}
        interactive
      />
    </section>
  )
}
