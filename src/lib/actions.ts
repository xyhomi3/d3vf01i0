'use server'

import * as Wakatime from '@/types/wakatimeResponse'

import { ENV } from '@/lib/env/constants'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db/prisma'
import { revalidatePath } from 'next/cache'

export const createPost = async (formData: FormData) => {
  const session = await auth()
  const desc = formData.get('desc') as string
  if (!session || !desc) return
  await db.post.create({
    data: {
      desc: desc,
      userId: session.user.id
    }
  })

  revalidatePath('/guest-book')
}

export const deletePost = async (id: number) => {
  await db.post.delete({
    where: {
      id: id
    }
  })

  revalidatePath('/guest-book')
}

export const weeklyCodingActivity = async () => {
  const res = await fetch(ENV.WAKATIME_WEEKLY_CODING_ACTIVITY_URL, {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodingActivity>
}

export const weeklyCodingLanguanges = async () => {
  const res = await fetch(ENV.WAKATIME_WEEKLY_CODING_LANGUAGES_URL, {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodingLanguanges>
}