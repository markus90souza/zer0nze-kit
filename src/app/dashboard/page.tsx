import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function  DashboardPage() {

  const session = await auth()

  if (!session) {
    redirect("/login")
  }
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>
        Dashboard Protected
      </h1>

      <span>{session?.user?.email ? session.user.email : "User not authenticated"}</span>
    </div>
  )
}
