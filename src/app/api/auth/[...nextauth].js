import NextAuth from 'next-auth'
import LinkedinProvider from 'next-auth/providers/linkedin'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    LinkedinProvider({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
