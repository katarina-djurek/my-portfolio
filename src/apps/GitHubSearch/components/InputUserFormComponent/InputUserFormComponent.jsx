import styles from "./InputUserFormComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeInputValue,
  fetchUserData,
  fetchUserRepoData,
  resetInputValue,
  toggleIsButtonPressed,
} from "../../features/githubUserDataSlice";

export default function InputUserFormComponent() {
  const userInputValue = useSelector(
    (store) => store.githubUserData.userInputValue
  );

  const dispatch = useDispatch();

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (userInputValue.trim()) {
      dispatch(fetchUserData(userInputValue));
      dispatch(fetchUserRepoData(userInputValue));
      dispatch(resetInputValue());
      dispatch(toggleIsButtonPressed());
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmitButton(e)}
      className={styles.user_form}
      name="userInputForm"
    >
      <label>
        <p className={styles.paragraph_element}>GitHub username:</p>

        <input
          name="userInput"
          className={styles.user_input_element}
          type="text"
          value={userInputValue}
          onChange={(e) => dispatch(changeInputValue(e.target.value))}
          placeholder="e.g. facebook"
        ></input>
      </label>

      <button className={styles.button_element}>GO!</button>
    </form>
  );
}
