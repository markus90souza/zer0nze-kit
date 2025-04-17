import Link from "next/link";

export default function LandingPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-10'>
        Landpage
      </h1>

      <Link href={'/login'}>
        Entrar
      </Link>

    </div>
  )
}
