import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import SlideSwitch from './SlideSwitch'
import Page from './Page'

// Routeにpathがない場合、常にmatchする
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md
// Routes without a path always match.

// match.params.idは、Route path="/:id"配下にコンポーネントじゃないと参照できない
// なのでpathnameを使う

const App = () => (
  <Router>
    <Route
      render={props => (
        <SlideSwitch pageKey={props.location.pathname}>
          {pageKey => (
            <Route
              path="/:id"
              render={props => <Page {...props} pageKey={pageKey} />}
            />
          )}
        </SlideSwitch>
      )}
    />
  </Router>
)

export default App
