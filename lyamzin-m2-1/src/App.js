import MainMenu from "./Menu-components/MainMenu/MainMenu";
import "./App.css";
import menuItems from "./data/menuItems.json";
function App() {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
    </div>
  );
}

export default App;
