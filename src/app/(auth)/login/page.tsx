
import { authenticateGoogle } from "@/actions/sign-in-with-google"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
const LoginPage = async () => {

  const session = await auth()

  if (session) {
    redirect("/dashboard")
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-10'>
        Login
      </h1>

      <form action={authenticateGoogle}>
        <button className="cursor-pointer rounded-sm px-4 border" type="submit">Signin with Google</button>
      </form>
    </div>
  )
}

export default LoginPage