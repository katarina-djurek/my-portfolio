import TODO_ACTION_ENUM from "../constants/todoActionEnum";

export const addTaskItem = (todoInputValue) => {
  return { type: TODO_ACTION_ENUM.ADD, todoInputValue };
};

export const deleteTaskItem = (id) => {
  return { type: TODO_ACTION_ENUM.DELETE, id };
};

export const changeTaskStatus = (id) => {
  return { type: TODO_ACTION_ENUM.CHANGE_TASK_STATUS, id };
};

export const clearCompletedTasks = () => {
  return { type: TODO_ACTION_ENUM.CLEAR_COMPLETED_TASKS };
};
