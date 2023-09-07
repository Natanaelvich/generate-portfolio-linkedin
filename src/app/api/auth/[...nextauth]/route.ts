import NextAuth from 'next-auth'
import LinkedinProvider from 'next-auth/providers/linkedin'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    LinkedinProvider({
      clientId: process.env.LINKEDIN_ID as string,
      clientSecret: process.env.LINKEDIN_SECRET as string,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
