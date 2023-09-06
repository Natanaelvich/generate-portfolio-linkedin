import ButtonLinkedin from "./components/ButtonLinkedin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       <h1 className="text-4xl font-bold text-center text-gray-900">
        Generate Portfolio Linkedin
       </h1>

       <p className="text-center text-gray-700">
        A simple tool to generate a portfolio from your Linkedin
       </p>

       <ButtonLinkedin />
      </div>
    </main>
  )
}
