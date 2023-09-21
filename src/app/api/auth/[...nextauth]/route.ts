import NextAuth, { AuthOptions } from 'next-auth'
import LinkedinProvider from 'next-auth/providers/linkedin'
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    LinkedinProvider({
      clientId: process.env.LINKEDIN_ID as string,
      clientSecret: process.env.LINKEDIN_SECRET as string,
      authorization: {
        url: 'https://www.linkedin.com/oauth/v2/authorization',
        params: { scope: 'r_basicprofile' },
      },
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({
        user,
        account,
        profile,
        email,
        credentials,
      })
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log({
        url,
        baseUrl,
      })
      return baseUrl
    },
    async session({ session, user, token }) {
      console.log({
        session,
        user,
        token,
      })
      return session
    },
  },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
