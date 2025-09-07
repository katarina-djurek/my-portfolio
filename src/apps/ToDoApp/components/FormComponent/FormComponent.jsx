import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addTaskItem } from "../../actions/actions";
import styles from "./FormComponent.module.css";

export default function FormComponent() {
  const [todoInputValue, setTodoInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTodoInputValue(event.target.value);
  };

  const handleAdd = () => {
    dispatch(addTaskItem(todoInputValue));
    setTodoInputValue("");
  };

  return (
    <div className={styles.mainContainer}>
      <input
        name="todoInput"
        placeholder="Add todo"
        value={todoInputValue}
        onChange={handleChange}
        className={styles.inputField}
      ></input>
      <Button
        onClick={handleAdd}
        disabled={todoInputValue.trim() === ""}
        variant="outline-light"
      >
        Add
      </Button>
    </div>
  );
}
