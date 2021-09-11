import { onSnapshot, Query } from '@firebase/firestore'
import { useEffect, useState } from 'react'

export const useSubscribeCollection = <T extends { id: string }>(query: Query) => {
  const [values, setValues] = useState<T[]>()

  useEffect(() => {
    const unsubscirbe = onSnapshot(query, (snap) => {
      setValues(
        snap.docs.map((doc) => ({ id: doc.id, ...doc.data({ serverTimestamps: 'estimate' }) } as T))
      )
    })
    return unsubscirbe
  }, [query])

  return [values]
}
