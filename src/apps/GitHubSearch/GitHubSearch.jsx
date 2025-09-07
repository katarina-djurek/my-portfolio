import styles from "./GitHubSearch.module.css";
import InputUserFormComponent from "./components/InputUserFormComponent/InputUserFormComponent";
import UserInformationComponent from "./components/UserInformationComponent/UserInformationComponent";
import { useSelector } from "react-redux";
import { Atom } from "react-loading-indicators";
import ErrorMessageComponent from "./components/ErrorMessageComponent/ErrorMessageComponent";

function GitHubSearch() {
  const { isButtonPressed, loading, error } = useSelector(
    (store) => store.githubUserData
  );

  return (
    <div className={styles.githubSearch}>
      {isButtonPressed ? (
        <InputUserFormComponent></InputUserFormComponent>
      ) : loading ? (
        <Atom color="#5f695f" size="large" />
      ) : error ? (
        <ErrorMessageComponent></ErrorMessageComponent>
      ) : (
        <UserInformationComponent></UserInformationComponent>
      )}
    </div>
  );
}

export default GitHubSearch;
