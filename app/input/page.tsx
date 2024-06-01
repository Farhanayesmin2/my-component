
"use client";
import React, { useState } from "react";
import uploadIcon from "../../images/Animation - 1716399977237.json";
import Progressbar from "../../images/progress bar (1).json";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai'; 
import { MdOutlineCloudUpload } from "react-icons/md";
import { PiFileC, PiFilesFill } from "react-icons/pi";
import { Input } from "@nextui-org/input";
interface FileI {
  file: File;
  size: string;
  isUploading: boolean;
  uploadPercentage: number;
}

export default function Upload(): JSX.Element {
  const [files, setFiles] = useState<FileI[]>([]);

  const handleFileAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files).map((file) => ({
      file,
      size: (file.size / 1024).toFixed(2) + ' KB', // File size in KB
      isUploading: false,
      uploadPercentage: 0,
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.file.name !== fileName));
  };

  return (
    <div >
      {/* This is the upload file input */}
      <div className="flex flex-col items-center justify-center py-4 m-24 border-[#3db78a] border-2 border-dashed hover:border-dotted">
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

      <p className="py-4 text-xl font-bold text-gray-700 text-center">Uploadable Files</p>
      <div className="flex flex-col items-center w-full">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between w-full bg-gray-100 p-3 mb-2 max-w-2xl rounded-lg">
            <div className="flex items-center flex-1">
              <FaRegFileAlt className="text-[#3db78a] w-10 h-10 mr-2" />
              <div className="flex flex-col flex-1">
                <span className="text-sm font-semibold">{file.file.name}</span>
                <span className="text-sm text-gray-500">{file.size}</span>
                {file.isUploading && (
                  <div className="flex items-center">
                    <Player
                      autoplay
                      loop
                      src={Progressbar}
                      style={{ height: '10px', width: '100%' }}
                    >
                      <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                    <span className="text-sm text-blue-500 ml-2">{file.uploadPercentage}%</span>
                  </div>
                )}
              </div>
            </div>
            <AiOutlineClose
              className="cursor-pointer text-red-500 ml-2"
              onClick={() => handleRemoveFile(file.file.name)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="flex justify-center p-2 text-md shadow-lg shadow-gray-500 hover:border font-semibold text-white hover:border-[#3db78a] mt-2 rounded-xl px-2 bg-[#3db78a] hover:text-[#3db78a] hover:bg-white"
        >
          <MdOutlineCloudUpload className="mr-2 w-6 h-6" /> Upload
        </button>
      </div>
      {/* This is the file input */}


      <p className="text-2xl text-center text-gray-700 font-bold my-5">Input</p>

<div className="grid lg:grid-cols-2 grid-cols-1 m-24">
  <div className="flex items-start justify-center mb-6">
    <PiFileC className="text-[#3db78a] w-10 h-10" />
    <Input
      placeholder="Chunk Size"
      id="chunk_size"
      type="text"
      color="danger"
      className="mr-4 pt-2 focus:outline-none focus:border-[#b3fae0] border-2 border-[#b3fae0] shadow-md bg-white rounded-md px-4 py-2"
    />
  </div>
  <div className="flex items-start justify-center mb-6">
    <PiFilesFill className="text-[#3db78a] w-10 h-10" />
    <Input
      placeholder="Chunk Overlap"
      id="chunk_overlap"
      type="text"
      color="danger"
      className="pt-2 focus:outline-none focus:border-[#b3fae0] border-2 border-[#b3fae0] shadow-md bg-white rounded-md px-4 py-2"
    />
  </div>
</div>
    </div>
  );
}
