import { NextApiRequest, NextApiResponse } from 'next'

import { auth } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await auth(req, res)
}