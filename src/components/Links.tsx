import { ReactElement } from 'react'

type Link = {
  href: string
  label: string
  icon: ReactElement
}

type Props = {
  links: Link[]
}

export default function Links({ links }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold  text-gray-900 mb-6">Links</h2>
      <ul className="flex flex-col gap-6">
        {links.map((link) => (
          <li className="flex items-center gap-2" key={link.href}>
            <div className="w-7 h-7">{link.icon}</div>

            <p className="text-gray-700">
              <a href={link.href}>{link.label}</a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
