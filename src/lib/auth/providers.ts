import { ENV } from '../constants'
import GitHub from 'next-auth/providers/github'

export const providers = [
    GitHub({
        clientId: ENV.GITHUB_CLIENT_ID,
        clientSecret: ENV.GITHUB_CLIENT_SECRET
    })
]