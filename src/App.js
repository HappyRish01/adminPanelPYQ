import { useState } from 'react';
import './App.css';
import {storageDB  } from './firebase'
import {ref , uploadBytes} from 'firebase/storage'
import { v4 } from 'uuid';
import Dropdownnn from './toggleComponent';
function App() {

  

  const uploadImage  = () => {
    if(imageUpload == null) return;
    const imgaeRef = ref(storageDB , `testing/${imageUpload.name + v4()}`);
    uploadBytes(imgaeRef , imageUpload).then(() => {alert("fuck we did it")})


  };
  const [imageUpload , setimageUpload] = useState(null);
  return (
    <>
    <div className="App">
      <input type='file'onChange={(event) => {setimageUpload(event.target.files[0])}}/>
      <button style={{background: "lightgreen" , padding: "5px" , fontSize: 15}}onClick={uploadImage}>Publish File</button>
    </div>

    
     <Dropdownnn />
    

    
    </>
    
  );
}

export default App;
