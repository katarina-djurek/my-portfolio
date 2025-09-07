import UserReposListComponent from "../UserReposListComponent/UserReposListComponent";
import styles from "./UserInformationComponent.module.css";
import { useSelector } from "react-redux";

export default function UserInformationComponent() {
  const userData = useSelector((store) => store.githubUserData.userData);

  return (
    <div className={styles.main_container}>
      <div className={styles.image_title_container}>
        <img
          src={userData.avatar_url}
          alt={userData.name}
          className={styles.img_element}
        />

        <h1>{userData.name}</h1>
      </div>

      <div className={styles.secondary_container}>
        <p>
          <strong>BIO:</strong> {userData.bio}
        </p>

        <p>
          <strong>LOCATION:</strong> {userData.location}
        </p>

        <UserReposListComponent></UserReposListComponent>
      </div>
    </div>
  );
}
