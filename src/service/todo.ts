import { addDoc, collection, deleteDoc, doc, orderBy, query, updateDoc } from 'firebase/firestore'
import { useMemo } from 'react'

import { Todo, TodoData } from '@/domain/todo'
import { db } from '@/firebaseApp'
import { serverTimestamp } from '@/lib/datetime'
import { useSubscribeCollection } from '@/lib/subscribe'
import { TimestampToFieldValue } from '@/types'

const todoCollectionPath = () => 'todos'
const todoCollectionRef = collection(db, todoCollectionPath())
const todoDocRef = (id: string) => doc(db, todoCollectionPath(), id)

export const getDefaultData = (): TimestampToFieldValue<TodoData> => ({
  content: '',
  completed: false,
  userId: '',
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),
})

export const createTodo = (newData: Partial<TodoData>) => {
  return addDoc(todoCollectionRef, { ...getDefaultData(), ...newData })
}

export const updateTodo = (id: Todo['id'], editedData: Partial<TodoData>) => {
  return updateDoc(todoDocRef(id), { updatedAt: serverTimestamp(), ...editedData })
}

export const deleteTodo = (id: Todo['id']) => {
  return deleteDoc(todoDocRef(id))
}

export const useSubscribeTodos = () => {
  const q = useMemo(() => query(todoCollectionRef, orderBy('createdAt')), [])
  const [todos] = useSubscribeCollection<Todo>(q)
  return [todos]
}
