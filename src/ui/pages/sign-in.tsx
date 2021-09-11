import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import { VFC } from 'react'

import {
  UserRegistrationForm,
  UserRegistrationFormProps,
} from '@/ui/components/UserRegistrationForm'
import { useSignIn } from '@/usecase/auth'

export type SignIn = UserRegistrationFormProps['onSubmit']

const SignInPage: VFC = () => {
  const signIn = useSignIn()

  return (
    <Container py="3">
      <VStack spacing="3">
        <Heading textAlign="center">Sign In</Heading>
        <Box alignSelf="stretch">
          <UserRegistrationForm submitButtonText={'Sign In'} onSubmit={signIn} />
        </Box>
      </VStack>
    </Container>
  )
}

export default SignInPage
