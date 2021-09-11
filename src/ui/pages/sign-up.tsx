import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import { VFC } from 'react'

import {
  UserRegistrationForm,
  UserRegistrationFormProps,
} from '@/ui/components/UserRegistrationForm'
import { useSignUp } from '@/usecase/auth'

export type SignUp = UserRegistrationFormProps['onSubmit']

const SignUpPage: VFC = () => {
  const signUp = useSignUp()

  return (
    <Container py="3">
      <VStack spacing="3">
        <Heading textAlign="center">Sign Up</Heading>
        <Box alignSelf="stretch">
          <UserRegistrationForm submitButtonText={'Sign Up'} onSubmit={signUp} />
        </Box>
      </VStack>
    </Container>
  )
}

export default SignUpPage
