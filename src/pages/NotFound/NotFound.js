import React from 'react'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-container">
        <div className="not-found-content">
            <img src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="Not Found" className='not-found-image' />
           <h1>404 - Not Found</h1>
           <p>The page you are looking for does not exist.</p>
        </div>
    </div>
  )
}

export default NotFound
