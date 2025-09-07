import { useSelector } from "react-redux";
import styles from "./ErrorMessageComponent.module.css";

export default function ErrorMessageComponent() {
  const error = useSelector((store) => store.githubUserData.error);

  return (
    <div>
      <p style={{ color: "red" }}>🚫 {error}</p>
      <button
        className={styles.try_again_button}
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
}
