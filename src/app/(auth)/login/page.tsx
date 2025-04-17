
import { signInWithGoogle } from "@/actions/sign-in-with-google"
export default function LoginPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-10'>
        Login
      </h1>

      <form action={signInWithGoogle}>
        <button className="cursor-pointer rounded-sm px-4 border" type="submit">Signin with Google</button>
      </form>
    </div>
  )
}
