function History({ history }) {
    return (
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">History</h2>
        <ul className="space-y-2">
          {history.map((item, index) => (
            <li key={index} className="p-2 bg-gray-200 rounded-md">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default History;
  