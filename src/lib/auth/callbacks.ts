import { Session, User } from 'next-auth' // Import the Session and User types from NextAuth

export const callbacks = {
    session: ({ session, user }: { session: Session, user: User }) => ({
        ...session,
        user: {
            ...session.user,
            id: user.id
        }
    })
}