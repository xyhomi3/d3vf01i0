import Link from 'next/link'
import { NavLink } from '@/components/atoms/nav-link'
import { NavbarMobileBtn } from './navbar-mobile'

export const Navbar = () => {
  return (
    <nav className='md:grid grid-cols-12 border-b flex items-center justify-between relative z-50 bg-background overflow-x-auto'>
      <Link href='/' className='font-bold md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-3 lg:col-span-2 shrink-0 transition-colors'>
      D3v<span className='font-light bg-gradient-to-r to-[#00bef0]  from-primary bg-clip-text text-transparent'>f01i0</span>
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

export const navMenu = [
  {
    name: '_h0m3',
    path: '/'
  },
  {
    name: '_ab0ut-m3',
    path: '/about'
  },
  {
    name: '_pr0j3cts',
    path: '/projects'
  },
  {
    name: '_gu3st-b00k',
    path: '/guest-book'
  },
  {
    name: '_artic13s',
    path: '/articles'
  }
]
