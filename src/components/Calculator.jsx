import React, { useState } from 'react';
import '../apps/App.css';

export default function Calculator() {
  // useState 훅을 사용하여 input 상태와 그 값을 변경하는 함수 setInput을 선언합니다.
  const [input, setInput] = useState('');

  // 사용자가 숫자나 연산자 버튼을 클릭할 때 호출되는 함수입니다.
  const handleClick = (value) => {
    // 현재 input 값에 사용자가 클릭한 버튼의 값을 추가하여 업데이트합니다.
    setInput(input + value);
  };

  // "C" 버튼을 클릭할 때 호출되는 함수입니다.
  const handleClear = () => {
    // input 값을 초기화하여 화면을 지웁니다.
    setInput('');
  };

  // "=" 버튼을 클릭할 때 호출되는 함수입니다.
  const handleCalculate = () => {
    try {
      // eval 함수를 사용하여 문자열 형태의 수식을 평가하고, 결과를 문자열로 변환하여 input 상태를 업데이트합니다.
      setInput(eval(input).toString());
    } catch (error) {
      // 평가할 수 없는 수식이 있거나 오류가 발생할 경우 "Error" 메시지를 표시합니다.
      setInput('Error');
    }
  };

  // JSX를 반환합니다.
  return (
    <div className="calculator">
      <h1>계산기</h1>
      {/* input 요소를 사용하여 현재 입력값을 표시합니다. readOnly 속성을 사용하여 사용자 입력을 방지합니다. */}
      <input type="text" value={input} readOnly />
      {/* 버튼 그룹을 만듭니다. */}
      <div className="buttons">
        {/* 각 버튼은 클릭 이벤트에 대응하여 handleClick 함수를 호출합니다. */}
        {/* "C" 버튼을 클릭하면 handleClear 함수를 호출하여 입력값을 지웁니다. */}
        <button style={{color:'#EA8474', backgroundColor:'#959EA2'}} onClick={() => handleClear()}>C</button>
        <button style={{color:'#8CF562', backgroundColor:'#959EA2'}} onClick={() => handleClick('/')}>÷</button>
        <br />
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('7')}>7</button>
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('8')}>8</button>
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('9')}>9</button>
        <button style={{color:'#8CF562', backgroundColor:'#959EA2'}} onClick={() => handleClick('*')}>x</button>
        <br />
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('4')}>4</button>
        <button style={{color:'#ffffff', backgroundColor:'#616264'}}onClick={() => handleClick('5')}>5</button>
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('6')}>6</button>
        <button style={{color:'#8CF562', backgroundColor:'#959EA2'}} onClick={() => handleClick('-')}>-</button>
        <br />
        <button style={{color:'#ffffff', backgroundColor:'#616264'}}onClick={() => handleClick('1')}>1</button>
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('2')}>2</button>
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('3')}>3</button>
        <button style={{color:'#8CF562', backgroundColor:'#959EA2'}} onClick={() => handleClick('+')}>+</button>
        <br />
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('√')}>&radic;</button> 
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('0')}>0</button>
        <button style={{color:'#ffffff', backgroundColor:'#616264'}} onClick={() => handleClick('.')}>.</button>
        {/* "=" 버튼을 클릭하면 handleCalculate 함수를 호출하여 계산 결과를 표시합니다. */}
        <button style={{color:'#ffffff', backgroundColor:'#16AA52'}} onClick={() => handleCalculate()}>=</button>
      </div>
    </div>
  );
}
