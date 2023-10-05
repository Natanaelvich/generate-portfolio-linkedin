import NextAuth, { AuthOptions } from 'next-auth'
import LinkedinProvider from 'next-auth/providers/linkedin'

export const authOptions: AuthOptions = {
  providers: [
    LinkedinProvider({
      clientId: process.env.LINKEDIN_ID as string,
      clientSecret: process.env.LINKEDIN_SECRET as string,
      authorization: {
        params: {
          scope: 'openid profile email',
        },
      },
      userinfo: {
        url: 'https://api.linkedin.com/v2/userinfo',
      },
      async profile(profile, tokens) {
        console.log({
          profile,
          tokens,
        })

        return {
          ...profile,
        }
      },
    }),
  ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
