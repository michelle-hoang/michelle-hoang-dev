import React from 'react'

export const Journey = () => {
  return (
    <div>
      <div>
        <h3>My Journey</h3>
      </div>
      <div className="info">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '48rem',
            marginRight: '1.5rem'
          }}
        >
          <div style={{width: '50%'}}>
            <p style={{textAlign: 'left'}}>
              I learned to make my mind large, as the universe is large, so that
              there is room for contradictions.
            </p>
            <p style={{textAlign: 'right'}}>Maxine Hong Kingston</p>
            <p style={{textAlign: 'left'}}>
              How does a body figure on its surface the very in-visibility of
              its hidden depth?
            </p>
            <p style={{textAlign: 'right'}}>Judith Butler</p>
          </div>
          <div
            style={{
              width: '50%',
              padding: '1rem'
            }}
          >
            <img src="temp.png" style={{width: '100%', marginLeft: '1rem'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey
