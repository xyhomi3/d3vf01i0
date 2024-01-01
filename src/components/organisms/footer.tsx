import { BiGitBranch, BiRefresh, BiXCircle } from 'react-icons/bi'
import { IoLogoGithub, IoWarningOutline } from 'react-icons/io5'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/atoms/tooltip'

import { AiOutlineClockCircle } from 'react-icons/ai'
import Link from 'next/link'
import { weeklyCodingActivity } from '@/lib/actions'

export const Footer = async () => {
  const { data } = await weeklyCodingActivity()
  const todayData = data[data.length - 1]

  return (
    <footer className='border-t text-off-white text-xs flex items-center justify-between select-none bg-layout relative z-30'>
      <div className='flex items-center border-r divide-x'>
        <Link
          target='_blank'
          href='https://github.com/xyhomi3/d3vf01i0'
          className='flex items-center gap-x-2 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors'
        >
          <BiGitBranch className='text-lg' />
          <p>main</p>
        </Link>
        <button
          aria-label='refetch'
          className='items-center gap-x-2 px-2 py-1 md:flex hidden group hover:text-foreground text-muted-foreground transition-colors'
          data-umami-event='footer-refresh-btn'
        >
          <BiRefresh className='text-xl group-active:rotate-180 transition-transform' />
        </button>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground'>
                <BiXCircle className='text-base' />
                <p>0</p>
                <IoWarningOutline className='text-base' />
                <p>0</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>No problems</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                aria-label={todayData?.grand_total.text}
                href='/coding-activity'
                className='items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground hover:text-foreground transition-colors'
              >
                <AiOutlineClockCircle className='text-base' />
                <p>{todayData?.grand_total.text}</p>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Today coding activity</p>
              <p className='text-sm text-muted-foreground'>click for more</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Link
          href='mailto:loua@0000.codes'
          target='_blank'
          className='items-center gap-x-1.5 px-2 py-1 md:flex hidden text-muted-foreground hover:text-foreground transition-colors'
        >
          <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
          <span>Available for a work!</span>
        </Link>
      </div>

      <div className='flex items-center divide-x divide border-l'>
        <div className='items-center gap-x-2 px-2 py-1 lg:flex hidden text-muted-foreground'>
          <p className='transition-colors bg-gradient-to-r via-[#00bef0] to-[#c7f284] from-primary bg-clip-text text-transparent'>Special thanks to:</p>
          <Link href='https://github.com/wiscaksono' target='_blank' className=' hover:text-foreground transition-colors'>
          wiscaksono
          </Link>
        </div>
        <Link target='_blank' href='https://github.com/xyhomi3' className='flex items-center gap-x-1 px-2 py-1 hover:text-foreground text-muted-foreground transition-colors'>
          <p>xyhomi3</p>
          <IoLogoGithub className='text-lg' />
        </Link>
      </div>
    </footer>
  )
}