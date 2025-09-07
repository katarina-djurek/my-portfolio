import MainNavigationComponent from "../MainNavigationComponent/MainNavigationComponent";
import styles from "./ProjectWrapper.module.css";

export default function ProjectWrapper({ src, title }) {
  return (
    <div className={styles.wrapper}>
      <MainNavigationComponent></MainNavigationComponent>
      <iframe src={src} title={title} className={styles.iframe} />
    </div>
  );
}
