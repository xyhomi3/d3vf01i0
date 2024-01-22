'use client'

// ShadCn
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/atoms/select';
// Next Intl
import { usePathname, useRouter } from '@/navigation'; // This useRouter is wrapped with next/navigation useRouter

import { Badge } from '@/components/atoms/badge';
import { Languages } from 'lucide-react';
import { useParams } from 'next/navigation';

// Variables

const LOCALES = [
  { code: 'en', name: 'EN' },
  { code: 'fr', name: 'FR' }
]
export const DEFAULT_LOCALE = LOCALES[0].code
const LanguageSelector = () => {

  const params = useParams()

 
  const pathname = usePathname();
  const router = useRouter();
  const handleLanguageChange = (lang: string) => {
    console.log(lang)
    router.push(pathname, {locale: lang});
  }
  return (
    <Select value={params.locale.toLocaleString()} onValueChange={lang => handleLanguageChange(lang)}>
      <SelectTrigger className='w-[auto] h-7 relative rounded-none border-none focus:ring-0 focus:outline-none' aria-label='Languages'>
        <Badge className='bg-gradient-to-r from-cyan-500 to-lime-400 dark:bg-gradient-to-r dark:from-cyan-700 dark:to-lime-600 text-secondary dark:text-gray-200 position: absolute -top-5 -left-2 font-normal border-border'>
          <span className='transition-colors'>beta</span>
        </Badge>
        <div className='flex flex-row gap-2 align-center items-center'>
          <Languages size={20} className='text-slate-400 animate-pulse'/>
          <SelectValue placeholder='Select a language' />
        </div>
      </SelectTrigger>
      <SelectContent
        style={{
          overflowY: 'hidden',
          height: 'min-content'
        }}
      >
        <SelectGroup>
          {LOCALES.map(locale => (
            <SelectItem key={locale.code} value={locale.code}>
              {locale.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelector
