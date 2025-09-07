import TODO_ACTION_ENUM from "../constants/todoActionEnum";

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ACTION_ENUM.ADD:
      const newTodoItem = {
        todoItem: action.todoInputValue,
        id: Date.now(),
        checked: false,
      };
      const newTodoList = [...state.todoList, newTodoItem];

      return {
        ...state,
        todoList: newTodoList,
      };

    case TODO_ACTION_ENUM.DELETE:
      const updatedList = state.todoList.filter(
        (item) => item.id !== action.id
      );

      return { ...state, todoList: updatedList };

    case TODO_ACTION_ENUM.CHANGE_TASK_STATUS:
      const changedItem = state.todoList.find((item) => item.id === action.id);
      changedItem.checked = !changedItem.checked;

      return { ...state, todoList: [...state.todoList] };

    case TODO_ACTION_ENUM.CLEAR_COMPLETED_TASKS:
      const filteredList = state.todoList.filter(
        (item) => item.checked === false
      );

      return { ...state, todoList: filteredList };

    default:
      return state;
  }
};

export default todoReducer;
