import CloseButton from "react-bootstrap/esm/CloseButton";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { changeTaskStatus, deleteTaskItem } from "../../actions/actions";
import styles from "./TodoTaskItem.module.css";

export default function TodoTaskItem({ item }) {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(deleteTaskItem(id));
  };

  const handleCheckboxChange = (id) => {
    dispatch(changeTaskStatus(id));
  };
  return (
    <div className={styles.rowContainer}>
      <Form.Check
        checked={item.checked}
        onChange={() => handleCheckboxChange(item.id)}
      />

      {item.checked ? <del>{item.todoItem}</del> : item.todoItem}

      <CloseButton
        onClick={() => handleRemove(item.id)}
        style={{ transform: "scale(0.75)" }}
      />
    </div>
  );
}
