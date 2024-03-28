// import { useState } from 'react';
import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';


// function App() {
//   const [name, setName] = useState('제임스');      
//   const handleClick = () => {       
//     const newName = prompt('이름을 입력하슈.')
//     setName(newName);
//   }
//   return (
//     <>    
//       <div style={{fontSize: '5rem'}}>{name}</div>
//       <button onClick={handleClick}>개명하기</button>     
//     </>
//   );
// }

// function App() {
//   const [name, setName] = useState('제임스');   
//   const [content, setContent] = useState('');  
//   return (
//     <div className='card'>    
//       <div style={{fontSize: '5rem'}}>{name}</div>
//       <h3>{content}</h3>
//       <br />
//       <button style={{padding: '5px', margin: '5px'}} onClick={() =>{
//         const newName = prompt('이름을 바꾸기.')
//         setName(newName);
//       }}>개명하기</button> 
//       <br />
//       <input type="text" onChange={event =>{
//         setContent(event.target.value);
//       }} />
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState('제임스');   
//   const [content, setContent] = useState('');  
//   return (
//     <div className='card'>    
//       <div style={{fontSize: '5rem'}}>{name}</div>
//       <h3>{content}</h3>
//       <br />
//       <button style={{padding: '5px', margin: '5px'}} onClick={() =>{
//         const newName = prompt('이름을 바꾸기.')
//         setName(newName);
//       }}>개명하기</button> 
//       <br />
//       <input style={{padding:'5px', margin:'5px'}} type="text" onChange={event =>{
//         setContent(event.target.value);
//       }} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <CardInput name={'제임스'} />
//       <br />
//       <CardInput name={'마리아'}/>
//     </>    
//   );
// }

function App() {
  return (
    <>
      <CardInput name={'제임스'} />
      <br />
      <CardInput2 name={'마리아'} email={'maria@naver.com'}/>
    </>    
  );
}

export default App;

