import FilterButtonsComponent from "./components/FilterButtonsComponent";
import FormComponent from "./components/FormComponent/FormComponent";
import ListComponent from "./components/ListComponent/ListComponent";
import { useParams } from "react-router-dom";
import FILTER_ENUM from "./constants/filterEnum";
import { useSelector } from "react-redux";
import styles from "./ToDoApp.module.css";

function ToDoApp() {
  const todoList = useSelector((store) => store.todolist.todoList);
  const { filterType } = useParams();
  const filter = filterType || FILTER_ENUM.ALL;

  return (
    <div className={styles.ToDoApp}>
      <h1 className={styles.title}>My tasks</h1>
      <FilterButtonsComponent filter={filter}></FilterButtonsComponent>
      <br></br>
      <FormComponent></FormComponent>
      <ListComponent todoList={todoList} filter={filter}></ListComponent>
    </div>
  );
}

export default ToDoApp;
