import React from 'react'
import {Link} from 'react-router-dom'

export const Skills = () => {
  return (
    <div>
      <div>
        <h3>Technical Skills</h3>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div>
          <p style={{textAlign: 'left'}}>
            <span className="highlight">Proficient:</span> Node.js, HTML5, CSS3,
            Javascript, Express, Sequelize, PostgreSQL, PostGIS, React, Redux,
            Github, Sketch, Keynote, Victory.js, React-Native, React-Navigation
          </p>
        </div>
        <div>
          <p style={{textAlign: 'left'}}>
            <span className="highlight">Familiar:</span> Jasmine, Mocha/Chai,
            Heroku, Travis, Chart.js, Expo.io, Google Maps API,
            React-Native-Maps, Ngrok
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Link to="/projects" className="navbar">
            <button type="button" className="seeProjectsButton">
              <p
                style={{
                  marginBlockStart: 0,
                  marginBlockEnd: 0,
                  padding: '0.25rem',
                  color: 'white'
                }}
              >
                See my skills in action
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Skills
