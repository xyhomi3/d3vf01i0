'use server'

import * as Wakatime from '@/types/wakatimeResponse'

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
  const res = await fetch('https://wakatime.com/share/@xyhomi3/0a7fc3fe-495b-4963-9c5f-df0c2b893782.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodingActivity>
}

export const weeklyCodingLanguanges = async () => {
  const res = await fetch('https://wakatime.com/share/@xyhomi3/f877fb4b-2940-4be4-b510-0c2e7cdd29cf.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodingLanguanges>
}

export const weeklyCodeEditor = async () => {
  const res = await fetch('https://wakatime.com/share/@xyhomi3/6909da7e-d1ef-4d18-8451-ab9c94c07410.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>
}

export const weeklyOperatingSystems = async () => {
  const res = await fetch('https://wakatime.com/share/@xyhomi3/d3c3885b-3fb4-4b32-969b-651ffbdc8ff6.json', {
    cache: 'no-store'
  })
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>
}
