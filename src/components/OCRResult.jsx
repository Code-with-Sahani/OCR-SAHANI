import { jsPDF } from 'jspdf';

function OCRResult({ text }) {
  // PDF Generation Function
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10); // Add extracted text to PDF
    doc.save('OCR_result.pdf'); // Download the PDF
  };

  return (
    <div className="mt-4 p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Extracted Text</h2>
      <textarea
        value={text}
        readOnly
        className="w-full h-40 p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
      />
      <button
        onClick={generatePDF}
        className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-200"
      >
        Download as PDF
      </button>
    </div>
  );
}

export default OCRResult;
