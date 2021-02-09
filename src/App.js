import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom'
import cn from 'classnames'

import HomePage from './routes/HomePage'
import GamePage from './routes/GamePage'
import MenuHeader from './components/MenuHeader'
import Footer from './components/footer'

import AboutPage from './routes/AboutPage'
import ContactPage from './routes/ContactPage'
import NotFound from './routes/NotFound/indext'

import s from './style.module.css'
import { FireBaseContex } from './context/firebaseContext'
import Firebase from './service/firebase'

const App = () => {
  const match = useRouteMatch('/')

  return (
    <FireBaseContex.Provider value={Firebase}>
      <Switch>
        <Route>
          <Route path="/404" component={NotFound} />

          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContex.Provider>
  )
}

export default App
