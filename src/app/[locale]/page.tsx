import React, { Suspense } from 'react'

import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

const CodeRoom = React.lazy(() => import('@/components/molecules/canvas/monitors/code-room'))
const Infos = React.lazy(() => import('@/components/molecules/infos'))
export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Home')

  return (
    <section className='flex items-center justify-center place-content-center p-0 h-full w-full'>

      <Suspense fallback={<div>{t('loading')}</div>}>
        <CodeRoom />
      </Suspense>
      <Infos />
    </section>
  )
}
