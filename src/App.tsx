import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { renderRoute } from '@/renderRoute'
import { Pattern, routeByPattern } from '@/routes'
import { useAuth } from '@/service/auth'
import { Header, HeaderProps } from '@/ui/components/Header'
import { useSignOut } from '@/usecase/auth'

export type SignOut = HeaderProps['onSignOut']

const App = () => {
  const { uid } = useAuth()
  const isLoggedIn = !!uid

  const signOut = useSignOut()

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onSignOut={signOut} />
      <Switch>
        {Object.keys(routeByPattern).map((_) => {
          const pattern = _ as Pattern
          return (
            <Route
              key={pattern}
              path={pattern}
              exact
              render={() => renderRoute({ pattern, isLoggedIn })}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default App
