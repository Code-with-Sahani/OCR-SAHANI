import React, { useState } from 'react';
import Header from './components/Header';
import FileUploader from './components/FileUploader';
import OCRResult from './components/OCRResult';
import History from './components/History';

function App() {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);

  const addHistory = () => {
    if (text) {
      setHistory([...history, text]);
    }
  };

  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div className="p-6 flex-1 flex flex-col items-center">
        <FileUploader setText={setText} />
        <OCRResult text={text} />
        <button
          onClick={addHistory}
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg"
        >
          Save OCR Result
        </button>
        <History history={history} />
      </div>
    </div>
  );
}

export default App;
