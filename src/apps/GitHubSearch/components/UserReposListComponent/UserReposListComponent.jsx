import styles from "./UserReposListComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsButtonPressed } from "../../features/githubUserDataSlice";

export default function UserReposListComponent() {
  const userRepoData = useSelector(
    (store) => store.githubUserData.userRepoData
  );

  const dispatch = useDispatch();

  return (
    <div className={styles.list_container}>
      <ul>
        <p>REPOSITORIES:</p>
        {userRepoData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <button onClick={() => dispatch(toggleIsButtonPressed())}>Reset</button>
    </div>
  );
}
