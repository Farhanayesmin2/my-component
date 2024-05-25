"use client";
import React, { useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import uploadIcon from "../../images/Animation - 1716399977237.json";

export default function InputPage() {
  const [files, setFiles] = useState([]);

  const handleFileAdd = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    console.log('Files:', selectedFiles);
  };

  return (
    <div >
      {/* This section is created for upload input */}
      <div className="flex flex-col items-center justify-center w-full py-4 border-[#3db78a] border-2 border-dashed hover:border-dotted">
        <p className="text-2xl text-center text-gray-700 font-bold">Upload</p>
        <label className="flex flex-col items-center bg-white rounded-lg tracking-wide uppercase cursor-pointer hover:text-white ease-linear transition-all duration-150">
          <Player
            autoplay
            loop
            src={uploadIcon}
            style={{ height: '200px', width: '200px' }}
          >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
          <input type="file" className="hidden" onChange={handleFileAdd} multiple />
        </label>
        <p className="mt-4 text-center text-gray-700">
          Drag and Drop or <span className="text-[#3db78a]">Choose file</span> to upload <br />
          PDF, DOCX, DOC, PPTX or PPT
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-bold text-gray-700">Uploaded Files:</h4>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="text-gray-700">
              {file.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
