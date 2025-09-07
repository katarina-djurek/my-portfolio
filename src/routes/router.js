import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import GitHubSearchPage from "../components/AppPages/GitHubSearchPage";
import ToDoAppPage from "../components/AppPages/ToDoAppPage";
import ToDoApp from "../apps/ToDoApp/ToDoApp";
import ProjectWrapper from "../components/ProjectWrapper/ProjectWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/NasaArticles",
    element: (
      <ProjectWrapper src="/apps/nasa-app/index.html" title="NASA App" />
    ),
  },
  {
    path: "/ChuckNorrisJokes",
    element: (
      <ProjectWrapper
        src="/apps/chuck-norris-jokes-app/index.html"
        title="Chuck Norris Joke Generator"
      />
    ),
  },
  {
    path: "/GitHubSearch",
    element: <GitHubSearchPage></GitHubSearchPage>,
  },
  {
    path: "/ToDoApp/*",
    element: <ToDoAppPage></ToDoAppPage>,
    children: [
      {
        index: true,
        element: <Navigate to="all" replace />,
      },
      {
        path: ":filterType",
        element: <ToDoApp />,
      },
    ],
  },
]);

export default router;
