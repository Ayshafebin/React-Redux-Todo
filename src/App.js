import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './TodoApp/TodosSlice';
import '../src/TodoApp/TodoApp.css'; 

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');
  const [edit, setEdit] = useState(null);

  const handleAddTodo = () => {
    if (newTodo !== '') {
      if (edit !== null) {
        dispatch(editTodo({ id: edit, text: newTodo }));
        setEdit(null);
      } else {
        dispatch(addTodo(newTodo));
      }
      setNewTodo('');
    }
  };

  const handleDeletetodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdittodo = (id, text) => {
    setNewTodo(text);
    setEdit(id);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: 'rgb(115, 96, 237)',marginTop: '200px' }}>
  <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Todo List</h1>
  <div style={{ display: 'flex', marginBottom: '20px' }}>
    <input
      type="text"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder="Add a new task"
      style={{ flex: '1', padding: '10px', borderRadius: '4px 0 0 4px', border: '1px solid #ccc' }}
    />
    <button
      onClick={handleAddTodo}
      style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '0 4px 4px 0',
        cursor: 'pointer',
      }}
    >
      {edit !== null ? 'Edit Task' : 'Add Task'}
    </button>
  </div>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {todos.map((todo) => (
      <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid #ccc', padding: '10px', backgroundColor: '#fff', borderRadius: '4px' }}>
        <span>{todo.text}</span>
        <div>
          <button
            onClick={() => handleDeletetodo(todo.id)}
            style={{ backgroundColor: '#f44336', color: 'white', padding: '5px 8px', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
          >
            Delete
          </button>
          <button
            onClick={() => handleEdittodo(todo.id, todo.text)}
            style={{ backgroundColor: '#2196F3', color: 'white', padding: '5px 8px', cursor: 'pointer', border: 'none', borderRadius: '4px', marginLeft: '5px' }}
          >
            Edit
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>



  );
}

export default App;
