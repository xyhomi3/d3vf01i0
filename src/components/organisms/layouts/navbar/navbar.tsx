import { NavbarMobileBtn, NavbarProvider } from './navbar-mobile'

import Image from 'next/image'
import Link from 'next/link'
import { NavLink } from '@/components/atoms/nav-link'
import { useTranslations } from 'next-intl'

export const Navbar = () => {
  const t = useTranslations('Navbar')

  const navMenu = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('projects'), path: '/projects' },
    { name: t('guest-book'), path: '/guest-book' },
    { name: t('articles'), path: '/articles' },
    { name: t('sounds'), path: '/sounds' }
  ]
  return (
    <nav className='md:grid grid-cols-12 border-b flex items-center justify-between relative z-50 bg-background overflow-x-auto'>
      <Link href='/' className='font-bold flex flex-row md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-3 lg:col-span-2 shrink-0 transition-colors'>
        <span>
          <span className='font-light bg-gradient-to-r bg-clip-text text-transparent from-cyan-700 to-lime-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-lime-400'>
            0000.
          </span>
          codes
        </span>
      </Link>
      <div className='md:col-span-9 lg:col-span-10 flex items-center justify-between'>
        <ul className='lg:flex items-center divide-x w-max border-r hidden shrink-0'>
          {navMenu.map((menu, i) => (
            <NavLink key={i} href={menu.path}>
              {menu.name}
            </NavLink>
          ))}
        </ul>

        <NavbarMobileBtn />
      </div>
    </nav>
  )
}
