export const ENV = {
  NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000',
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: '',

  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  AUTH_SECRET: process.env.AUTH_SECRET || 'some-secret',

  NODE_ENV: process.env.NODE_ENV || 'development'
}

// import { z } from 'zod'

// const env = z.object({
//   NEXT_PUBLIC_WEBSITE_URL: z.string().default('http://localhost:3000'),
//   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().default(''),
//   GITHUB_CLIENT_SECRET: z.string(),
//   GITHUB_CLIENT_ID: z.string(),
//   AUTH_SECRET: z.string(),
//   NODE_ENV: z.string().default('development')
// })

// export const ENV = env.parse(process.env)
