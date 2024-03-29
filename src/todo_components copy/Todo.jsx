import '../apps/App.css';
import { TbTrashOff } from "react-icons/tb";


export default function Todo({todo, onUpdate, onDelete}) {
  const {id, work, status} = todo;
  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  }
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input type='checkbox' id={id} checked={status === 'completed'}
        onChange={handleChange} />
      <label htmlFor={id}>{work}</label>
      <button onClick={handleDelete}><TbTrashOff /></button>
    </li>
  );
}