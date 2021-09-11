import { WithId } from '@/types'

export type UserData = {
  name: string
  email: string
}

export type User = WithId<UserData>
