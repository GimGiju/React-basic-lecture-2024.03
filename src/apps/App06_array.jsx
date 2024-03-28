// import { useState } from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [foods, setFoods] = useState(['피자', '삽겹살', '불고기']);
  return (
    <div className='card'>
      <ul>내가 좋아하는 음식</ul>
      {
        foods.map((food, idx) => (
          <li key={idx}>{food}</li>     // key 값을 주면 더 안정적으로 돌아간다고 함
        ))
      }
      <br />
      <button onClick={() => {
        const item = prompt('좋아하는 음식을 입력하세요.');
        setFoods([...foods, item]);
      }}>메뉴 추가</button>
    </div>
  );
}

export default App;

