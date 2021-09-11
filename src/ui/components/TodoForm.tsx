import { FormControl, Input } from '@chakra-ui/react'
import { FocusEventHandler, FormEventHandler, VFC } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
  content: string
}

export type TodoCreateFormProps = {
  onSubmit: (values: FormValues) => Promise<void>
}

export const TodoCreateForm: VFC<TodoCreateFormProps> = ({ onSubmit }) => {
  const { handleSubmit: handleSubmitHookForm, register, reset } = useForm()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    await handleSubmitHookForm(onSubmit)(e)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Input
          id="content"
          {...register('content')}
          required
          size="lg"
          placeholder="What needs to be done?"
          autoComplete="off"
        />
      </FormControl>
    </form>
  )
}

export type TodoEditFormProps = {
  defaultValues: FormValues
  onSubmit: (values: FormValues) => Promise<void>
  onBlur: FocusEventHandler<HTMLInputElement>
}

export const TodoEditForm: VFC<TodoEditFormProps> = ({ defaultValues, onSubmit, onBlur }) => {
  const { handleSubmit: handleSubmitHookForm, register, reset } = useForm({ defaultValues })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    await handleSubmitHookForm(onSubmit)(e)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl py="1">
        <Input
          id="content"
          {...register('content')}
          required
          onBlur={onBlur}
          autoFocus
          autoComplete="off"
          py="7"
          px="14"
        />
      </FormControl>
    </form>
  )
}
