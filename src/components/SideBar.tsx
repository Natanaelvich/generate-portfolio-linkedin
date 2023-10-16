import AcademicEducation from './AcademicEducation'
import Avatar from './Avatar'
import Contacts from './Contacts'
import Links from './Links'
import Skills from './Skills'

export default function SideBar() {
  const links = [
    {
      href: 'https://github.com',
      label: 'GitHub',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M12 .3C5.4.3.3 5.5.3 12.1c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.4 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .9.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.1-1.2 3-.9 3-.9.6 1.5.2 2.6.1 2.9.8.8 1.2 1.8 1.2 3 0 4.2-2.6 5.1-5.1 5.4.4.3.8.8.8 1.8v2.7c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C23.7 5.5 18.6.3 12 .3z" />
        </svg>
      ),
    },
    {
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.225 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.455C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.412 20.567H3.676V9h3.737v11.567zM5.546 7.433a2.144 2.144 0 01-2.141-2.138 2.142 2.142 0 012.141-2.138c1.185 0 2.142.956 2.142 2.138 0 1.183-.957 2.138-2.142 2.138zm15.018 13.134h-3.724v-5.569c0-1.328-.026-3.037-1.85-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.129V9h3.585v1.573c.502-.949 1.729-1.848 3.562-1.848 3.815 0 4.527 2.508 4.527 5.769v6.073z"
            fill="#0077B5"
          />
        </svg>
      ),
    },
  ]

  return (
    <aside className="flex flex-col gap-6 border-r border-gray-200 h-full p-6">
      <Avatar />
      <Contacts />
      <Skills />
      <AcademicEducation />
      <Links links={links} />
    </aside>
  )
}
