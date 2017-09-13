import React from 'react'
import universal from 'react-universal-component'
import Route from 'react-router-dom/Route'
import Link from 'react-router-dom/Link'
import { withRouter } from 'react-router-dom'

import styles from '../css/App'
import UsageHero from './UsageHero'
import Loading from './Loading'
import NotFound from './NotFound'

const UniversalComponent = universal(props => import(`./${props.page}`), {
  minDelay: 1200,
  loading: Loading,
  error: NotFound
})

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

class App extends React.Component {
  render() {
    const { done, page } = this.state

    return (
      <div className={styles.container}>
        <UsageHero page={page} />
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to='/bar' onClick={this.changePage}>
                Bar
              </Link>
            </li>
            <li>
              <Link to='/baz' onClick={this.changePage}>
                Baz
              </Link>
            </li>
            <li>
              <Link to='/example' onClick={this.changePage}>
                Example
              </Link>
            </li>
            <li>
              <Link to='/faceySpacey' onClick={this.changePage}>
                FaceySpacey
              </Link>
            </li>
            <li>
              <Link to='/foo' onClick={this.changePage}>
                Foo
              </Link>
            </li>
            <li>
              <Link to='/reduxFirstRouter' onClick={this.changePage}>
                Redux First Router
              </Link>
            </li>
            <li>
              <Link to='/rudy' onClick={this.changePage}>
                Rudy
              </Link>
            </li>
            <li>
              <Link to='/universal' onClick={this.changePage}>
                Universal
              </Link>
            </li>
          </ul>
        </nav>
        <h1>Hello Reactlandia - Minimal React Router 4 Boilerplate</h1>
        {done && <div className={styles.checkmark}>all loaded ✔</div>}
        <Route>
          <UniversalComponent
            page={page}
            onBefore={this.beforeChange}
            onAfter={this.afterChange}
            onError={this.handleError}
          />
        </Route>

        <div className={styles.info}>
          {this.buttonText()}
        </div>

        <p>
          <span>*why are you looking at this? refresh the page</span>
          <span>and view the source in Chrome for the real goods</span>
        </p>
      </div>
    )
  }
  constructor(props) {
    super(props)

    const index = 1
    let page
    if (props.location.pathname === '' || props.location.pathname === '/') {
      page = 'Bar'
    }
    else {
      page = capitalize(props.location.pathname.substring(1))
    }
    this.state = {
      index,
      loading: false,
      done: false,
      error: false,
      page
    }
  }

  changePage = () => {
    if (this.state.loading) return

    this.setState((prevState, props) => ({
      page:
        props.location.pathname === ''
          ? 'Bar'
          : capitalize(props.location.pathname.substring(1))
    }))
  }

  beforeChange = ({ isSync }) => {
    if (!isSync) {
      this.setState({ loading: true, error: false })
    }
  }

  afterChange = ({ isSync, isServer, isMount }) => {
    if (!isSync) {
      this.setState({ loading: false, error: false })
    }
    else if (!isServer && !isMount) {
      this.setState(() => ({
        done: true,
        error: false
      }))
    }
  }

  handleError = () => {
    this.setState({ error: true, loading: false })
  }

  buttonText() {
    const { loading, error } = this.state
    if (error) return 'ERROR'
    return loading ? 'LOADING...' : 'Spacey is a Genius'
  }
}

const app = withRouter(App)

export default app
