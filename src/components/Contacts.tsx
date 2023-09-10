export default function Contacts() {
  return (
    <div>
      <h2 className="text-2xl font-bold  text-gray-900">Contact</h2>
      <ul className="flex flex-col gap-2">
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
    </div>
  )
}
