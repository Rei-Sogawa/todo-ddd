import * as firestore from 'firebase/firestore'

export type FieldValue = firestore.FieldValue

export type Timestamp = firestore.Timestamp

export type TimestampToFieldValue<T> = {
  [key in keyof T]: T[key] extends Timestamp ? FieldValue : T[key]
}

export type WithId<T> = T & { id: string }
