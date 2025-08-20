import { useState } from "react";

interface TaskFormProps {
  addTodo: (todo: string) => void;
}
const TaskForm = ({ addTodo }: TaskFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <form className="taskList" onSubmit={handleSubmit}>
      <input
        type="text"
        className="taskListText"
        value={value}
        placeholder="Tasks to Complete"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="taskListBtn">
        Add Task
      </button>
    </form>
  );
};
export default TaskForm;
