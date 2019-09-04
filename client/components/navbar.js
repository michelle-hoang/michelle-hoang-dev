import React from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="directory">
        <nav>
          <Link to="/" className="navbar">
            <div>
              <h4>Home</h4>
            </div>
          </Link>
          <Link to="/projects" className="navbar">
            <div>
              <h4>Projects</h4>
            </div>
          </Link>
          <Link to="/artwork" className="navbar">
            <div>
              <h4>Artwork</h4>
            </div>
          </Link>
          <Link to="/blog" className="navbar">
            <div>
              <h4>Blog</h4>
            </div>
          </Link>
          <Link to="/contactme" className="navbar">
            <div>
              <h4>Contact Me</h4>
            </div>
          </Link>
        </nav>
      </div>
    )
  }
}
