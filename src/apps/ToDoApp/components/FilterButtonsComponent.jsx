import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import FILTER_ENUM from "../constants/filterEnum";

export default function FilterButtonsComponent({ filter }) {
  return (
    <div>
      <Link to="/ToDoApp/all">
        <Button
          variant="outline-light"
          className={`btn ${filter === FILTER_ENUM.ALL ? "active" : ""}`}
        >
          All
        </Button>
      </Link>

      <Link to="/ToDoApp/active">
        <Button
          variant="outline-light"
          className={`btn ${filter === FILTER_ENUM.ACTIVE ? "active" : ""}`}
        >
          Active
        </Button>
      </Link>

      <Link to="/ToDoApp/completed">
        <Button
          variant="outline-light"
          className={`btn ${filter === FILTER_ENUM.COMPLETED ? "active" : ""}`}
        >
          Completed
        </Button>
      </Link>
    </div>
  );
}
