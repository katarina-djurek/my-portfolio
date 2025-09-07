import "./App.css";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import MainNavigationComponent from "./components/MainNavigationComponent/MainNavigationComponent";

function App() {
  return (
    <div className="App">
      <MainNavigationComponent></MainNavigationComponent>
      <AboutComponent></AboutComponent>
      <footer></footer>
    </div>
  );
}

export default App;
