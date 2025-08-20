import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface TodoType {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

interface TodoProps {
  flask: TodoType;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: any) => void;
}
const Todo = ({ flask, toggleComplete, deleteTodo, editTodo }: TodoProps) => {
  const [urgency, setUrgency] = useState("Medium");
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(flask.id)}
        className={`${flask.completed ? "completed" : ""}`}
      >
        {flask.task}
      </p>
      <div className=" icon">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(flask.id)}
        />
        <FontAwesomeIcon icon={faTrash}  onClick={() => deleteTodo(flask.id)} />
      </div>

      {
        <select className="urg" value={urgency} onChange={(e) => setUrgency(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      }
    </div>
  );
};

export default Todo;
