import AcademicEducation from './AcademicEducation'
import Avatar from './Avatar'
import Contacts from './Contacts'
import Skills from './Skills'

export default function SideBar() {
  return (
    <aside className="flex flex-col gap-4 border-r border-gray-200 h-full p-6">
      <Avatar />
      <Contacts />
      <Skills />
      <AcademicEducation />
    </aside>
  )
}
