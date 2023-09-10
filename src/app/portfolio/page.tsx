import About from '@/components/About'
import Expirence from '@/components/Expirence'
import SideBar from '@/components/SideBar'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid grid-cols-aside gap-4 p-4 h-full">
        <SideBar />

        <div>
          <section>
            <About />

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
