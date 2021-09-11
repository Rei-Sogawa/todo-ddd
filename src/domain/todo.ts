import { User } from '@/domain/user'
import { Timestamp, WithId } from '@/types'

export type TodoData = {
  content: string
  completed: boolean
  userId: User['id']
  createdAt: Timestamp
  updatedAt: Timestamp
}

export type Todo = WithId<TodoData>
