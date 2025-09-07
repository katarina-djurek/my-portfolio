import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import TodoTaskItem from "../TodoTaskItem/TodoTaskItem";
import { clearCompletedTasks } from "../../actions/actions";
import { useDispatch } from "react-redux";
import FILTER_ENUM from "../../constants/filterEnum";
import styles from "./ListComponent.module.css";

export default function ListComponent({ todoList, filter }) {
  const dispatch = useDispatch();

  const filteredList = todoList.filter((item) => {
    if (filter === FILTER_ENUM.ACTIVE) return !item.checked;
    if (filter === FILTER_ENUM.COMPLETED) return item.checked;
    return true;
  });

  const completedExists = filteredList.some((item) => item.checked);

  return (
    <Container className={styles.mainContainer}>
      <ListGroup className={styles.listContainer}>
        {filteredList.map((item) => (
          <ListGroup.Item key={item.id} className={styles.listItem}>
            <TodoTaskItem item={item}></TodoTaskItem>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {completedExists && (
        <Button
          className={styles.clearCompletedButton}
          onClick={() => dispatch(clearCompletedTasks())}
          variant="outline-light"
        >
          Clear Completed
        </Button>
      )}
    </Container>
  );
}
