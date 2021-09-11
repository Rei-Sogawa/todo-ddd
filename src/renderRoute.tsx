import { Redirect } from 'react-router'

import { Pattern, routeByPattern } from '@/routes'

export const renderRoute = ({ pattern, isLoggedIn }: { pattern: Pattern; isLoggedIn: boolean }) => {
  const privateRoutes: Pattern[] = ['/']
  const isPrivateRoutes = privateRoutes.includes(pattern)
  if (!isLoggedIn && isPrivateRoutes) {
    return <Redirect to={{ pathname: routeByPattern['/sign-in'].path() }} />
  }

  const signInRoutes: Pattern[] = ['/sign-up', '/sign-in']
  const isSignInRoutes = signInRoutes.includes(pattern)
  if (isLoggedIn && isSignInRoutes) {
    return <Redirect to={{ pathname: routeByPattern['/'].path() }} />
  }

  const { Component } = routeByPattern[pattern]
  return <Component />
}
