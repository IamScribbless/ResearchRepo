import React, { useState } from "react";
import axios from "axios"; 

function FileUpload(){

    const [selectedFile, setSelectedFile] = useState(null);


    const handleFileSelect = (e) => {
        setSelectedFile(e.target.value)
      };
      
      const handleFileUpload = () => {
        axios.post('');
      };


    return(
<div> 
    <div className="my-4">
      <h2 className="text-lg text-gray-700 font-semibold"> Upload Additional Files </h2>
      <p className=" italic text-sm text-gray-500 ">Please export PowerPoint or Keynote slides to JPGs and uplaod them here</p>
      </div>
    <input type= "file" onChange={handleFileSelect} className=" text-white focus:shadow-outline border border-gray-300 bg-gray-400 rounded hover:outline-none hover:shadow-outline" />
    <button onClick={handleFileUpload}>Upload</button>
    </div>
    );
}

export default FileUpload;