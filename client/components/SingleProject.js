import React from 'react'

export const SingleProject = () => {
  return (
    <div style={{marginBottom: '5rem'}}>
      <div className="header">
        <h1>Project Name</h1>
      </div>
      <div style={{border: '2px solid black', width: '35rem', height: '20rem'}}>
        <h3 style={{textAlign: 'center'}}>Carousel</h3>
      </div>
      <div style={{marginBottom: '2rem'}}>
        <div>
          <h4>Project Description</h4>
          <p>Description</p>
          <p>Description</p>
          <p>Description</p>
        </div>
        <div>
          <h4>Tech Stack</h4>
          <p>Description</p>
          <p>Description</p>
        </div>
        <div>
          <h4>Github Repo:</h4>
        </div>
      </div>
      <div
        style={{
          border: '2px solid',
          borderColor: '#1f3b66',
          width: '35rem',
          height: '20rem'
        }}
      >
        <h4 style={{textAlign: 'center'}}>Presentation/Screencast</h4>
      </div>
    </div>
  )
}
export default SingleProject
