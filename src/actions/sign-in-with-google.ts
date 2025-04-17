  "use server"

import { signIn } from "@/lib/auth"

const signInWithGoogle = async () => {
  await signIn("google", {
    redirectTo: "/dashboard",
  })
}

export { signInWithGoogle }