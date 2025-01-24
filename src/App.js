import React, { useState } from 'react'
import Img from './img.jpg'
const App = () => {
  // parameters
  const[img,setimg]=useState(Img);
  const[load,setload]=useState(false);
  const[qrdata,setqrdata]=useState("");
  const[size,setSize]=useState(150);

  function Qr_gen()
  {
  try{
       setload(true);
       const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${size}x${size}`;
       setimg(url);
  }
  catch(error){
    console.log("Error occurs while gendrating the Qr-Code")
  }
  finally{
    setload(false);
  }
}
  return (
    <div>
      <h1>QR Code Gendrator</h1>
      {/* conditional renderring */}
      {load && <p>please wait</p>}
      <img src={img}  className='QR-img' alt=''></img>

      <label className='input-label'>Data for QR-Code</label>
      <input type="text" id="data-input" placeholder='Enter data for Qr code' onChange={(e)=>setqrdata(e.target.value)}></input>
      <label className='input-label'>
        ImageSize(eg:150)
      </label>
      <input type="text" id="sizeinput" placeholder='Enter image size' onChange={(e)=>setSize(e.target.value)}></input>
      <button className="gen-btn" onClick={Qr_gen}>Gendrate QR-Code</button>
      <button className="download" onClick={()=>
        {
          const link=document.createElement("a");
          link.href=Img;
          link.download="code.jpg";
          link.click();
        }}>download QR-Code</button>
      
    </div>
  )
}

export default App