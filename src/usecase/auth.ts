import { SignOut } from '@/App'
import * as AuthService from '@/service/auth'
import { SignIn } from '@/ui/pages/sign-in'
import { SignUp } from '@/ui/pages/sign-up'

export const useSignIn = () => {
  const signIn: SignIn = async (v) => {
    await AuthService.signIn(v)
  }
  return signIn
}

export const useSignUp = () => {
  const signUp: SignUp = async (v) => {
    await AuthService.signUp(v)
  }
  return signUp
}

export const useSignOut = () => {
  const signOut: SignOut = async () => {
    await AuthService.signOut()
  }
  return signOut
}
