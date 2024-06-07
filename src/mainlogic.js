import React, { useContext } from 'react'
import {storageDB  } from './firebase'
import {ref , uploadBytes} from 'firebase/storage'
import { v4 } from 'uuid';
import { useState } from 'react';
import "../src/components/Navbar";
import { AppContext } from './AppContext';


export default function Mainlogic() {
  const [imageUpload , setimageUpload] = useState(null);
  const {year , stream , subject} = useContext(AppContext)


    const uploadImage  = () => {
        if(imageUpload == null) return;
        const imgaeRef = ref(storageDB , `${year}/${stream}/${subject}/${imageUpload.name + v4()}`);
        uploadBytes(imgaeRef , imageUpload).then(() => {alert("fuck we did it")})
        console.log(imgaeRef)
    
      };

      

  return (
    <div className="App">
    <input type='file'onChange={(event) => {setimageUpload(event.target.files[0])}}/>
    <button style={{background: "lightgreen" , padding: "5px" , fontSize: 15}}onClick={uploadImage}>Publish File</button>
  </div>
  )
}
