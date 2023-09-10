import Image from 'next/image'

export default function Avatar() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image
        src="http://github.com/natanaelvich.png"
        alt="Avatar"
        width={100}
        height={100}
        className="rounded-full"
      />

      <h1 className="text-2xl font-bold text-gray-900">Natanael Vich</h1>
      <h2 className="text-xl font-semibold text-gray-900">Software Engineer</h2>
      <h3 className="text-lg font-semibold text-gray-900">
        ReactJS | React Native | NodeJS
      </h3>
    </div>
  )
}
