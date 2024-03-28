import { useState } from 'react';
import '../apps/App.css';

export default function User() {
  const initUsers =[
    {id: 1, name:'admin', email:'admin@human.com'},
    {id: 2, name:'james', email:'james@human.com'}
  ]
  const [users, setUsers] = useState([{id: 1, name:'admin', email:'admin@human.com'}]);
 
  return (
    <div className='card'>  
      <h1>사용자 목록</h1>  
      <table boarder={1}>
        <tr><th>ID</th><th>이름</th><th>email</th></tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>
      <br />
      <button onClick={() =>{
        const id = promlt('Id 값을 입력하세요');
        const name = promlt('이름을 입력하세요');
        const email = promlt('Email을 입력하세요');
        setUsers([...users, {id, name, email}]);
      }}>추가</button>
      <button onClick={() =>{
        const id= prompt('아이디값을 입력하세요');
        const newUsers = users.filter(users.id != id);
        // let newUsers = [];
        // for (let user of users){
        //   if (users.id != id){
        //     newUsers.push(user);
        //   }
        // }
        console.log(users);
        setUsers(newUsers);
      }} >삭제 </button>

  
    </div>
  );
}
