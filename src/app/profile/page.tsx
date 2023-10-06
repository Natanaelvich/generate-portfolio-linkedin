'use client'

import ButtonGeneratePortifolio from '@/components/ButtonGeneratePortifolio'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const route = useRouter()
  const { data: session } = useSession()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  if (!session?.user) {
    return null
  }

  const handleGeneratePortifolio = () => {
    route.push('/portfolio')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      {/* avatar */}
      <Image
        className="rounded-full"
        src={session.user.image || '/avatar.png'}
        alt={session.user.name || 'Avatar'}
        width={100}
        height={100}
      />

      {/* name */}
      <h1 className="text-4xl font-bold text-center text-gray-900">
        {session?.user?.name}
      </h1>

      {/* email */}
      <p className="text-center text-gray-700">{session?.user?.email}</p>

      <ButtonGeneratePortifolio onClick={handleGeneratePortifolio} />

      {/* logout */}
      <button
        className="px-4 py-2 text-white bg-blue-600 rounded-md"
        onClick={handleSignOut}
      >
        Logout
      </button>
    </div>
  )
}

export default Profile
