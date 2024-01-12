'use server'

import * as Wakatime from '@/types/wakatimeResponse'

import { ENV } from './constants'
import { auth } from './auth'
import { db } from './prisma'
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
    cache: 'default'
  })
  return res.json() as Promise<Wakatime.WeeklyCodingActivity>
}

export const weeklyCodingLanguanges = async () => {
  const res = await fetch(ENV.WAKATIME_WEEKLY_CODING_LANGUAGES_URL, {
    cache: 'default'
  })
  return res.json() as Promise<Wakatime.WeeklyCodingLanguanges>
}