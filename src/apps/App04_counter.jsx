import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);      // const [count, setCount] = useState(0);: useState 훅을 사용하여 count라는 상태 변수와 해당 상태를 업데이트하는 setCount 함수를 선언합니다.(0)으로 초기값으로 0을 설정합니다.
  const [numbers, setNumbers] = useState([]); 
  const handleClick = () => {       //const handleClick = () => { ... }: handleClick 함수를 정의합니다. 버튼이 클릭되었을 때 호출되며, setCount 함수를 사용하여 count 상태를 증가
    setCount(count + 1);
    // let newNumbers = [...numbers, count +1];
    // setNumbers(newNumbers);          //  위 코드랑 세트 /이방법도 사용가능
    setNumbers(numbers => [...numbers, count + 1]);     // 새로운 객체를 참조하는 방법
    // setNumbers(numbers.push(count + 1));     //이렇게 사용하면 에러
    // numbers.push(count + 1);      // 권장하는 방법은 아니지만 잘 돌아가긴함
    console.log(count);
  }
  return (
    <>    
      <div style={{fontSize: '5rem'}}>{count}</div>
      <h3>{numbers}</h3>
      <button onClick={handleClick}>증가하기</button>     {/*<button onClick={handleClick}>증가하기</button>: 클릭 이벤트가 발생하면 */}
    </>
  );
}

export default App;