import MainMenu from "./Menu-components/MainMenu/MainMenu";
import ToggleButton from "./Menu-components/ToggleButton/ToggleButton";

import "./App.css";
import menuItems from "./data/menuItems.json";
function App() {
  return (
    <div className="App">
      <h2>Lyamzin. Modul 2.2</h2>
      <h2>Lyamzin. Modul 2.1</h2>
      <h3>Menu-components. MainMenu</h3>
      <MainMenu items={menuItems} />
      <ToggleButton text="Click me" type="button" />
    </div>
  );
}

export default App;
