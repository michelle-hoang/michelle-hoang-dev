import React from 'react'
import {Link} from 'react-router-dom'

export const Projects = () => {
  return (
    <div style={{paddingBottom: '5rem'}}>
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="goal">
        <div className="projectDeck">
          <div className="projectCard">
            <div className="projectCarousel">
              <div>
                <img src="breadshop.png" style={{width: '100%'}} />
              </div>
            </div>
            <div className="projectInfo">
              <h3>Let's get this bread</h3>
              <div>
                <p style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                  An e-commerce website selling bread and related products
                </p>
                <p style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                  Tech stack: React-Native, Expo.io, React-Navigation,
                  React-Native-Maps, PostGIS, Native-Base
                </p>
              </div>
              <div className="projectFooter">
                <div>
                  <Link to="/singleproject">
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#EBC57C',
                        border: '2px solid black'
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          padding: '0.25rem',
                          marginBlockStart: 0,
                          marginBlockEnd: 0
                        }}
                      >
                        Github
                      </p>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/singleproject">
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#E29E93',
                        border: '2px solid black'
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          padding: '0.25rem',
                          marginBlockStart: 0,
                          marginBlockEnd: 0
                        }}
                      >
                        Screencast
                      </p>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/singleproject">
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#82BBB5',
                        border: '2px solid black'
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          padding: '0.25rem',
                          marginBlockStart: 0,
                          marginBlockEnd: 0
                        }}
                      >
                        More info ->
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectCarousel">
              <div>
                <img src="stackathon.png" style={{width: '100%'}} />
              </div>
            </div>
            <div className="projectInfo">
              <h3>From D3 to Victory!</h3>
              <div>
                <p style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                  Data visualizations about my experience learning D3 and
                  Victory.js during a 4-day hackathon
                </p>
                <p style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                  Tech stack: React, Victory.js, D3.js
                </p>
              </div>
              <div className="projectFooter">
                <div>
                  <Link to="/singleproject">
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#EBC57C',
                        border: '2px solid black'
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          padding: '0.25rem',
                          marginBlockStart: 0,
                          marginBlockEnd: 0
                        }}
                      >
                        Github
                      </p>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/singleproject">
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#E29E93',
                        border: '2px solid black'
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          padding: '0.25rem',
                          marginBlockStart: 0,
                          marginBlockEnd: 0
                        }}
                      >
                        Screencast
                      </p>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/singleproject">
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#82BBB5',
                        border: '2px solid black'
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          padding: '0.25rem',
                          marginBlockStart: 0,
                          marginBlockEnd: 0
                        }}
                      >
                        More info ->
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectCarousel">
              <div>
                <img src="stroll.png" style={{width: '100%'}} />
              </div>
            </div>
            <div className="projectInfo">
              <h3>Stroll</h3>
              <div>
                <p style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                  A mobile app where users can discover walking tours and
                  attractions
                </p>
                <p style={{paddingLeft: '1rem', paddingRight: '1rem'}}>
                  Tech stack: Express, Sequelize, React, Redux, React-Bootstrap,
                  Sketch, Stripe
                </p>
              </div>
              <div className="projectFooter">
                <div>
                  <Link to="/singleproject">
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#EBC57C',
                        border: '2px solid black'
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          padding: '0.25rem',
                          marginBlockStart: 0,
                          marginBlockEnd: 0
                        }}
                      >
                        Github
                      </p>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/singleproject">
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#E29E93',
                        border: '2px solid black'
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          padding: '0.25rem',
                          marginBlockStart: 0,
                          marginBlockEnd: 0
                        }}
                      >
                        Screencast
                      </p>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/singleproject">
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#82BBB5',
                        border: '2px solid black'
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 'bold',
                          padding: '0.25rem',
                          marginBlockStart: 0,
                          marginBlockEnd: 0
                        }}
                      >
                        More info ->
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
