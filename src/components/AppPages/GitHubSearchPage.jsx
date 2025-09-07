import GitHubSearch from "../../apps/GitHubSearch/GitHubSearch";
import { Provider } from "react-redux";
import { store } from "../../apps/GitHubSearch/services/store";
import MainNavigationComponent from "../MainNavigationComponent/MainNavigationComponent";

export default function GitHubSearchPage() {
  return (
    <div>
      <MainNavigationComponent></MainNavigationComponent>

      <Provider store={store}>
        <GitHubSearch></GitHubSearch>
      </Provider>
    </div>
  );
}
