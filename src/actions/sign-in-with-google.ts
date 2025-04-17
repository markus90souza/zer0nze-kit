  "use server"

import { signIn, signOut, auth } from "@/lib/auth"


const authenticateGoogle = async () => {

  const session = await auth()

  if(session){
    return await signOut({
      redirectTo: '/login'
    })
  }

  await signIn("google", {
    redirectTo: "/dashboard",
  })
}

export { authenticateGoogle }