import { Provider } from "react-redux";
import { store } from "../../apps/ToDoApp/services/store";
import MainNavigationComponent from "../MainNavigationComponent/MainNavigationComponent";
import ToDoApp from "../../apps/ToDoApp/ToDoApp";

export default function ToDoAppPage() {
  return (
    <div>
      <MainNavigationComponent></MainNavigationComponent>
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    </div>
  );
}
