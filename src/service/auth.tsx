import {
  createUserWithEmailAndPassword,
  onAuthStateChanged as fbAuthOnAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as fbAuthSignOut,
} from 'firebase/auth'
import { createContext, ReactNode, useContext, useState, VFC } from 'react'
import { useMount } from 'react-use'

import { auth } from '@/firebaseApp'
import { assertIsDefined } from '@/lib/assert'

export const signUp = ({ email, password }: { email: string; password: string }) =>
  createUserWithEmailAndPassword(auth, email, password)

export const signIn = ({ email, password }: { email: string; password: string }) =>
  signInWithEmailAndPassword(auth, email, password)

export const signOut = () => fbAuthSignOut(auth)

// AuthProvider
const onAuthStateChanged = (
  ...[nextOrObserver, error, completed]: Parameters<typeof fbAuthOnAuthStateChanged> extends [
    unknown,
    ...infer Rest
  ]
    ? Rest
    : []
) => fbAuthOnAuthStateChanged(auth, nextOrObserver, error, completed)

export type Value = { uid?: string }

const AuthContext = createContext<Value | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider: VFC<AuthProviderProps> = ({ children }) => {
  const [initialized, setInitialized] = useState(false)

  const [value, setValue] = useState<Value>({ uid: undefined })

  useMount(() => {
    onAuthStateChanged((user) => {
      setValue({ uid: user ? user.uid : undefined })
      if (!initialized) {
        setInitialized(true)
      }
    })
  })

  return <AuthContext.Provider value={value}>{initialized && children}</AuthContext.Provider>
}

export const useAuth = () => {
  const value = useContext(AuthContext)
  assertIsDefined(value)
  return value
}
