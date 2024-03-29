import './App.css';
import Header from '../todo_bs_components/Header';
import TodoList from '../todo_bs_components/TodoList';
import { useState } from 'react';

function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');
  return (
    <div className='card'>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;