import { faArrowUpFromBracket, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
// import Banner from "../assets/images/upload_banner.jpg";
import { CircularProgress } from '@mui/material';
import { motion } from "framer-motion";
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';


const UploadFile = () => {
      const [files, setFiles] = useState([]);
      const [downloadUrl, setDownloadUrl] = useState("");
      const [loading, setLoading] = useState(false);
      const [isError, setIsError] = useState(false)

      const onDrop = useCallback(acceptedFiles => {
            // Do something with the files
            setFiles(acceptedFiles);
      }, []);

      const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false });

      // file upload handler 
      const handleFileUpload = async () => {
            setLoading(true);
            setIsError(false);
            setDownloadUrl("");
            try {
                  const res = await axios.post("http://75.119.137.41:5285/signedurls", {
                        fileName: files[0]?.name,
                        extension: files[0]?.name?.split('.')?.pop(),
                        contentType: files[0]?.type
                  });
                  if (res?.data) {
                        const result = await axios.put(res?.data?.uploadURL, files[0], {
                              headers: {
                                    'Content-Type': files[0]?.type,
                              }
                        });
                        console.log(result)
                        setDownloadUrl(res?.data?.downloadURL);
                        setLoading(false);
                        setIsError(false);
                        setFiles([]);
                  }
            } catch (error) {
                  setLoading(false);
                  setIsError(true)
            }
      }

      // what to render
      let content;
      let Button;

      // when loading
      if (loading && !isError) {
            content = <div className='my-4 w-fit mx-auto'>
                  <CircularProgress />
            </div>
            Button = <motion.button
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                  }}
                  disabled={true} className={`primary_btn_disabled mt-4 flex items-center gap-2 mx-auto`}>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  <span>Upload</span>
            </motion.button>
      }

      // when will be successfully uploaded.
      if (!isError && !loading && downloadUrl) {
            content = <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                  }}
                  className='mt-4 border border-dashed border-gray-400 p-4 w-fit mx-auto'>
                  <p className='text-green-500 font-bold text-base text-center'>Your file was successfully uploaded.</p>
                  <p className='primary_paragraph text-center text-[var(--colorPrimary)] underline'><a href={downloadUrl} target='_blank' rel="noreferrer">Download Your File</a></p>
            </motion.div>
            Button = <motion.button
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                  }}
                  disabled={true} className={`primary_btn_disabled mt-4 flex items-center gap-2 mx-auto`}>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  <span>Upload</span>
            </motion.button>
      }

      // when will be an error
      if (isError && !loading) {
            content = <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                  }}
                  className='mt-4 border border-dashed border-gray-400 p-4 w-fit mx-auto'>
                  <p className='text-red-500 font-bold text-base text-center'>Something went wrong. Please, try again.</p>
            </motion.div>
            Button = <motion.button
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                  }}
                  onClick={handleFileUpload} className={`primary_btn mt-4 flex items-center gap-2 mx-auto`}>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  <span>Upload</span>
            </motion.button>
      }

      // when user chose a file
      if (!isError && !loading && files?.length > 0) {
            content = <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                  }}
                  className='mt-4 border border-dashed border-gray-400 p-4 w-fit mx-auto'>
                  <ul className='text-start'>
                        <li><span className='font-bold text-gray-800'>File Name:</span> {files[0]?.name}</li>
                        <li><span className='font-bold text-gray-800'>File Extension:</span> {files[0]?.name?.split('.')?.pop()}</li>
                        <li><span className='font-bold text-gray-800'>Content Type:</span> {files[0]?.type}</li>
                        <li><span className='font-bold text-gray-800'>File Size:</span> {files[0]?.size} Bytes / {(files[0]?.size / (1024 * 1024)).toFixed(2)} MB</li>
                        <li><span className='font-bold text-gray-800'>Last Modified:</span> {new Date(files[0]?.lastModifiedDate).toUTCString()}</li>
                  </ul>
            </motion.div>
            Button = <motion.button
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                  }}
                  onClick={handleFileUpload} className={`primary_btn mt-4 flex items-center gap-2 mx-auto`}>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  <span>Upload</span>
            </motion.button>
      }
      console.log(downloadUrl)
      return (
            <div
                  // style={{ backgroundImage: `url(${Banner})` }} 
                  className='bg-[#ebf5ff] my-[80px]'>
                  <div className='container mx-auto px-6 md:px-10 py-[80px] text-center'>
                        <div className='w-full md:w-[800px] mx-auto flex flex-col md:flex-row gap-4 md:gap-12 items-center'>
                              <div className='space-y-8'>
                                    <h1 className='font-semibold text-4xl text-gray-800'>Upload Your File With <span className='text-[var(--colorPrimary)]'>IGLOO</span></h1>
                                    <p className="primary_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam modi sed maxime consectetur ex. Pariatur doloribus ducimus ex! Vitae, odio.</p>
                                    {
                                          content
                                    }
                                    {
                                          Button
                                    }
                              </div>
                              <div className='relative w-[220px] h-auto '>
                                    {/* spin border */}
                                    <div className='w-[220px] h-[220px] rounded-full border-4 border-dashed border-[var(--colorPrimary)] animate-spin'>
                                    </div>
                                    {/* dropzone div */}
                                    <div {...getRootProps()} className='w-[200px] h-[200px] rounded-full bg-gray-100 my-6 grid place-items-center cursor-pointer group border border-gray-400 p-4 absolute top-[-15px] left-[10px]'>
                                          <input {...getInputProps()} />
                                          <div className='flex flex-col items-center gap-4 text-base font-semibold text-gray-800'>
                                                <FontAwesomeIcon icon={faFile} className='text-6xl group-hover:animate-bounce text-[var(--colorPrimary)]' />
                                                <span>Select Or Drag and Drop Your File</span>
                                          </div>
                                    </div>
                              </div>
                        </div>


                  </div>
            </div>
      );
};

export default UploadFile;