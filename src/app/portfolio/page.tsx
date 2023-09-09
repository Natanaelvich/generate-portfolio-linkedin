import AcademicEducation from '@/components/AcademicEducation'
import Expirence from '@/components/Expirence'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid grid-cols-aside gap-4 p-4 h-full">
        {/*  sidebar */}
        <aside className="flex flex-col gap-4 border-r border-gray-200 h-full">
          <section>
            <h2 className="text-2xl font-bold  text-gray-900">Contact</h2>
            <ul className="flex flex-col gap-2">
              <li className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
                Phone: +55 11 99999-9999
              </li>
              <li className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
                Email:
                <a
                  href="mailto:taelima1997@gmail.com"
                  className="text-blue-500"
                >
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

          <section>
            <h2 className="text-2xl font-bold  text-gray-900">Skills</h2>
            <ul className="flex flex-col gap-2">
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
            <AcademicEducation />
          </section>
        </aside>

        {/*  main content */}
        <div>
          <section>
            <h2 className="text-2xl font-bold  text-gray-900">About</h2>
            <p className=" text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptatum sapiente dicta quidem ratione reprehenderit, soluta
              ipsam perferendis eum dolor similique repellat eligendi nostrum
              impedit amet sint nobis sit ea!
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-6">
              Expirences
            </h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Expirence />
              </li>
              <li>
                <Expirence />
              </li>
              <li>
                <Expirence />
              </li>
              <li>
                <Expirence />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
