import Link from 'next/link'

export default function Home () {
  return (
    <main className="grid place-content-center h-screen gap-y-2">
      <h1 className="text-2xl">Bienvenidos</h1>
      <Link href={'/admin'} className="px-4 py-2 rounded-md bg-blue-600 text-white text-center">Ir a Admin</Link>
    </main>
  )
}
