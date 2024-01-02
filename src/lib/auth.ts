import { DefaultSession } from 'next-auth'
import { ENV } from './constants'
import GitHub from 'next-auth/providers/github'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from './prisma'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  secret: ENV.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({
      clientId: ENV.GITHUB_CLIENT_ID,
      clientSecret: ENV.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id
      }
    })
  },
  pages: {
    error: '/'
  }
})