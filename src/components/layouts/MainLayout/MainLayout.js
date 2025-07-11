import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
function StudentLayout({children}) {
  return (
    <div style={{boxSizing:'border-box'}} className='main-layout'>
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}

export default StudentLayout
