import NextAuth, { AuthOptions } from 'next-auth'
import LinkedinProvider from 'next-auth/providers/linkedin'

export const authOptions: AuthOptions = {
  providers: [
    LinkedinProvider({
      clientId: process.env.LINKEDIN_ID as string,
      clientSecret: process.env.LINKEDIN_SECRET as string,
      authorization: {
        params: { scope: 'openid profile email' },
      },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      profile(profile, tokens) {
        const defaultImage =
          'https://cdn-icons-png.flaticon.com/512/174/174857.png'
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        }
      },
    }),
  ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
