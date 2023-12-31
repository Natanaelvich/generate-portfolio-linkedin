'use client'

import { signIn, useSession } from 'next-auth/react'
import ButtonLinkedin from '../components/ButtonLinkedin'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()

  const handleSignIn = () => {
    signIn('linkedin', {
      callbackUrl: '/profile',
    })
  }

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/profile')
    }
  }, [router, status])

  if (status === 'loading') {
    return null
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <div className="flex items-center justify-center gap-6">
        <Image src="/portfolio-icon.png" alt="Logo" width={100} height={100} />
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Generate Portfolio Linkedin
        </h1>
      </div>

      <p className="text-center text-gray-700">
        A simple tool to generate a portfolio from your Linkedin
      </p>

      <div className="flex items-center justify-center mt-4">
        {session?.user?.name ? (
          <p className="text-center text-gray-700">
            Welcome {session?.user?.name}
          </p>
        ) : (
          <ButtonLinkedin onClick={handleSignIn} />
        )}
      </div>
    </main>
  )
}
