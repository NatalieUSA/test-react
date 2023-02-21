import MainMenu from "./Menu-components/MainMenu/MainMenu";
import ToggleButton from "./Menu-components/ToggleButton/ToggleButton";

import "./App.css";
import menuItems from "./data/menuItems.json";
function App() {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      <ToggleButton text="Click me" type="button" />
    </div>
  );
}

export default App;
