import { useState } from "react";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTaskForm from "./EditTodoForm";

export const TaskWrapper = () => {
  interface todo {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  }

  const [todos, setTodos] = useState<todo[]>([]);

  const addTodo = (todo: any) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id: any) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="TaskWrap">
      <h1>Let's Be Productive!</h1>
      <TaskForm addTodo={addTodo} />
       {todos.map((todo) =>
        todo.isEditing ? (
          <EditTaskForm editTodo={editTodo} flask={todo} />
        ) : (
        <Todo
          flask={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TaskWrapper;
