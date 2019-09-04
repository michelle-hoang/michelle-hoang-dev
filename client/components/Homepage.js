import React from 'react'
import About from './About'
import Skills from './Skills'
import Journey from './Journey'

export const Homepage = () => {
  return (
    <div style={{marginBottom: '5rem'}}>
      <div className="header">
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <h2 style={{marginBlockEnd: 0}}>Hello, there,</h2>
          <h2 style={{marginBlockStart: 0}}>
            I'm Michelle. It's great to meet you!
          </h2>
        </div>
      </div>
      <div className="goal">
        <div style={{width: '50rem'}}>
          <About />
          <Skills />
          <Journey />
        </div>
      </div>
    </div>
  )
}
export default Homepage
