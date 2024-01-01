import { ENV } from './constants'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { callbacks } from './auth/callbacks'
import { db } from './prisma'
import { providers } from './auth/providers'
import { z } from 'zod'

// Define a Zod schema for the NextAuth configuration
const NextAuthConfig = z.object({
  secret: z.string(),
  adapter: z.any(), // Replace with a more specific schema if possible
  providers: z.array(z.any()), // Replace with a more specific schema if possible
  callbacks: z.any(), // Replace with a more specific schema if possible
  pages: z.object({
    error: z.string()
  })
})

// Validate the configuration object
const config = NextAuthConfig.parse({
  secret: ENV.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  providers,
  callbacks,
  pages: {
    error: '/'
  }
})

export const auth = NextAuth(config)