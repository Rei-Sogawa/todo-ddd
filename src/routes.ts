import { generatePath } from 'react-router-dom'

import IndexPage from '@/ui/pages'
import SignInPage from '@/ui/pages/sign-in'
import SignUpPage from '@/ui/pages/sign-up'

export const routeByPattern = {
  '/': {
    path: () => generatePath('/'),
    Component: IndexPage,
  },
  '/sign-up': {
    path: () => generatePath('/sign-up'),
    Component: SignUpPage,
  },
  '/sign-in': {
    path: () => generatePath('/sign-in'),
    Component: SignInPage,
  },
}

export type Pattern = keyof typeof routeByPattern
