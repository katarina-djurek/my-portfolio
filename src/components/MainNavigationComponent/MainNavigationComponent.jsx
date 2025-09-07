import { NavLink } from "react-router-dom";
import styles from "./MainNavigationComponent.module.css";

export default function MainNavigationComponent() {
  return (
    <nav className={styles.mainNavContainer}>
      <NavLink to={"/"}>
        <div className={styles.mainNavItem}>Home</div>
      </NavLink>

      <NavLink to={"/NasaArticles"}>
        <div className={styles.mainNavItem}>NASA articles</div>
      </NavLink>

      <NavLink to={"/ChuckNorrisJokes"}>
        <div className={styles.mainNavItem}>Chuck Norris</div>
      </NavLink>

      <NavLink to={"/ToDoApp"}>
        <div className={styles.mainNavItem}>To do app</div>
      </NavLink>

      <NavLink to={"/GitHubSearch"}>
        <div className={styles.mainNavItem}>GitHub search</div>
      </NavLink>
    </nav>
  );
}
