import Image from 'next/image'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col">
      {/*  sidebar */}
      <aside className="flex flex-col gap-4 items-center justify-center">
        <Image
          src="https://avatars.githubusercontent.com/u/69631?v=4"
          alt="avatar"
          className="w-24 h-24 rounded-full"
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Generate Portfolio Linkedin
        </h1>
        <p className="text-center text-gray-700">
          A simple tool to generate a portfolio from your Linkedin
        </p>

        <section>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            <li className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              #javascript
            </li>
            <li className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              #react
            </li>
            <li className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              #nextjs
            </li>
            <li className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              #tailwindcss
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Contact
          </h2>
          <ul className="flex flex-wrap gap-2">
            <li className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              Phone: +55 11 99999-9999
            </li>
            <li className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              Email:
              <a href="mailto:taelima1997@gmail.com" className="text-blue-500">
                taelima1997@gmail.com
              </a>
            </li>
            <li className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              Linkedin:
              <a
                href="https://www.linkedin.com/in/taelima1997/"
                className="text-blue-500"
              >
                taelima1997
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </main>
  )
}
