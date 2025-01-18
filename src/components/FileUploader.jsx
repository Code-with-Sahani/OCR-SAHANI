import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

function FileUploader({ setText }) {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));

    Tesseract.recognize(
      file,
      'eng',
      {
        logger: (m) => console.log(m),
      }
    ).then(({ data: { text } }) => {
      setText(text);
    });
  };

  return (
    <div className="text-center mt-8">
      <label htmlFor="file-upload" className="bg-blue-600 text-white py-3 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-200">
        Upload Document
      </label>
      <input 
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
      {image && <img src={image} alt="Preview" className="w-64 h-auto mx-auto mt-4 rounded-lg shadow-lg" />}
    </div>
  );
}

export default FileUploader;
