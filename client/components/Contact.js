import React from 'react'

export const Contact = () => {
  return (
    <div style={{marginBottom: '8rem'}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '20rem',
            marginRight: '1rem'
          }}
        >
          <div style={{paddingLeft: '0.5rem', textAlign: 'left'}}>
            <h2>Contact Info:</h2>
          </div>
          <div className="info">
            <div>
              <div>
                <p>
                  Email:{' '}
                  <span className="highlight">hello@michellehoang.dev</span>
                </p>{' '}
                <p>
                  LinkedIn:{' '}
                  <span className="highlight">
                    <a href="https://www.linkedin.com/in/hoangmichelle">
                      linkedin.com/in/hoangmichelle/
                    </a>
                  </span>
                </p>
                <p>
                  Github:{' '}
                  <span className="highlight">
                    <a href="https://www.github.com/michelle-hoang">
                      github.com/michelle-hoang
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <p>
            Click <span className="highlight">here</span> to download my resume
          </p>
          <div
            style={{
              alignSelf: 'center',
              width: '25rem',
              height: '33rem',
              border: '2px solid',
              borderColor: '#1f3b66',
              backgroundColor: 'white'
            }}
          >
            <img src="michelle-hoang-resume.png" style={{width: '100%'}} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
