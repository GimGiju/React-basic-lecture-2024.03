import './App.css';


function App() {
  const handleFile = () => {
    fetch('data/products.json')
  }

  return (
    <div className='card'>
      <button onClick={handleFile}>파일 읽기</button>
    </div>
  );
}

export default App;