import React from 'react'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'

import Homepage from './Homepage'
import Navbar from './Navbar'
import Projects from './Projects'
import Artwork from './Artwork'
import Blog from './Blog'
import Contact from './Contact'
import SingleProject from './SingleProject'
import DigitalFootprint from './DigitalFootprint'

export default class Root extends React.Component {
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
