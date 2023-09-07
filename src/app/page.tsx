import ButtonLinkedin from './components/ButtonLinkedin'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Generate Portfolio Linkedin
      </h1>

      <p className="text-center text-gray-700">
        A simple tool to generate a portfolio from your Linkedin
      </p>

      <div className="flex items-center justify-center mt-4">
        <ButtonLinkedin />
      </div>
    </main>
  )
}
