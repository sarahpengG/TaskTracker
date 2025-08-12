import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(flask.id)}
        className={`${flask.completed ? "completed" : ""}`}
      >
        {flask.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(flask.id)}/>
        <FontAwesomeIcon icon={faTrash}  onClick={() =>deleteTodo(flask.id)}/>
      </div>
    </div>
  );
};

export default Todo;
