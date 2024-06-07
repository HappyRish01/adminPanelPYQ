
import './App.css';

import { useState } from 'react';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import Mainlogic from './mainlogic';
import { AppContext } from './AppContext';
function App() {

  

 
  const [year , setYear ] = useState(2023)
  const [stream , setStream] = useState('waste')
  const [subject , setSubject] = useState('waste')
  return (
    <AppContext.Provider value={{year , setYear , stream , setStream , subject , setSubject }}>
   
    
     <Navbar/>
     <Dropdown/>
    <Mainlogic/>

    
    </AppContext.Provider>
    
  );
}

export default App;
