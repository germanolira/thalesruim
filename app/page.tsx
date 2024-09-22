import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">thales ruim medroso</h1>
        <h1 className="text-2xl font-bold">
          Os melhores jogadores atualmente:
        </h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Germano</h2>
          <h2 className="text-xl font-bold">Pablo</h2>
        </div>
      </main>
    </div>
  )
}
