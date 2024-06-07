import React from 'react'
import './css/styles.css';
export default function Dropdown() {
  return (


<div className='container'>
<div className=" boss my-4 mx-3">
  <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
    Science
  </button>

  <ul className="dropdown-menu ">
    
      <ul className='Child'>
        
        <li className="dropdown-item">Physics</li>
        <li className="dropdown-item">Chemistry</li>
        <li className="dropdown-item">Mathematics</li>
        <li className="dropdown-item">Biology</li>

        </ul>
   
  </ul>
</div>
<div className="btn-group my-4 mx-3">
  <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
    Commerce
  </button>

  <ul className="dropdown-menu ">
    
      <ul className='Child'>
        
        <li className="dropdown-item">Accountancy</li>
        <li className="dropdown-item">Business Studies</li>
        <li className="dropdown-item">Economics</li>
        <li className="dropdown-item">Mathematics</li>

        </ul>
   
  </ul>
</div>






</div>
  )
  }
  