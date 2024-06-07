import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from '../AppContext'




function Navbar() {
    
    
  
    const data = useContext(AppContext)
    
    return (
      
        
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Year
          </a>
          <ul className="dropdown-menu">
            <li  className="dropdown-item" onClick={()=> {data.setYear(2022)}}>2022</li>
            <li  className="dropdown-item" onClick={()=> {data.setYear(2023)}}>2023</li>
            <li  className="dropdown-item" onClick={()=> {data.setYear(2024)}}>2024</li>
            
          </ul>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        
    </div>
      
  )
}
export default Navbar
