import { createSlice } from '@reduxjs/toolkit';

const TodosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [...state, { id: Date.now(), text: action.payload  }];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    }, 
    editTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = TodosSlice.actions;
export default TodosSlice.reducer;