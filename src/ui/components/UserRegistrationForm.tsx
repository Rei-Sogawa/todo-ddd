import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { VFC } from 'react'
import { useForm } from 'react-hook-form'

export type FormValues = {
  email: string
  password: string
}

export type UserRegistrationFormProps = {
  submitButtonText: string
  onSubmit: (values: FormValues) => Promise<void>
}

export const UserRegistrationForm: VFC<UserRegistrationFormProps> = ({
  submitButtonText,
  onSubmit,
}) => {
  const { handleSubmit, register } = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing="5">
        <VStack alignSelf="stretch">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input id="email" type="email" {...register('email')} required autoComplete="off" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              id="password"
              type="password"
              {...register('password')}
              required
              autoComplete="off"
            />
          </FormControl>
        </VStack>

        <Button alignSelf="end" type="submit">
          {submitButtonText}
        </Button>
      </VStack>
    </form>
  )
}
