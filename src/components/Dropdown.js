import React, { useContext } from 'react'
import './css/styles.css';
import { AppContext } from '../AppContext';
export default function Dropdown() {

  const {setStream , setSubject} = useContext(AppContext)
  return (


<>
<div className="btn-group">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => {setStream('Science')}} >
    Science
  </button>

  <ul className="dropdown-menu ">
    
      <ul className='Child'>
        
        <li className="dropdown-item" onClick={()=>{setSubject('Physics')}}>Physics</li>
        <li className="dropdown-item" onClick={()=>{setSubject('Chemistry')}}>Chemistry</li>
        <li className="dropdown-item" onClick={()=>{setSubject('Mathematics')}}>Mathematics</li>
        <li className="dropdown-item" onClick={()=>{setSubject('Biology')}}>Biology</li>

        </ul>
   
  </ul>
</div>
<<<<<<< HEAD
<div className="btn-group">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=> {setStream('Commerce')}}>
=======
<div className="btn-group my-4 mx-3">
  <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
>>>>>>> cead543a44ba070a82535d8283f235c101c65258
    Commerce
  </button>

  <ul className="dropdown-menu ">
    
      <ul className='Child'>
        
        <li className="dropdown-item" onClick={()=>{setSubject('Accountancy')}}>Accountancy</li>
        <li className="dropdown-item" onClick={()=>{setSubject('Business Studies')}}>Business Studies</li>
        <li className="dropdown-item" onClick={()=>{setSubject('Economics')}}>Economics</li>
        <li className="dropdown-item" onClick={()=>{setSubject('Mathematics')}}>Mathematics</li>

        </ul>
   
  </ul>
</div>






</div>
  )
  }
  