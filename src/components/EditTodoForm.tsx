import { useState } from "react";

interface EditTodoType {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

interface EditTaskFormProps {
  editTodo: (newTask: string, id: string) => void;
  flask: EditTodoType;
}
const EditTaskForm = ({ editTodo, flask }: EditTaskFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    editTodo(value, flask.id);
  };

  return (
    <form className="taskList" onSubmit={handleSubmit}>
      <input
        type="text"
        className="taskListText"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="taskListBtn">
        Update
      </button>
    </form>
  );
};
export default EditTaskForm;
