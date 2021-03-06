import React from 'react'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'

import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Artwork from './components/Artwork'
import Blog from './components/Blog'
import Contact from './components/Contact'
import SingleProject from './components/SingleProject'
import DigitalFootprint from './components/DigitalFootprint'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="directoryContainer">
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/artwork" component={Artwork} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contactme" component={Contact} />
            <Route exact path="/singleproject" component={SingleProject} />
            <Route
              exact
              path="/digitalfootprint"
              component={DigitalFootprint}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}
