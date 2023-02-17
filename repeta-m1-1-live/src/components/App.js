import { RecipeList } from "./RecipeList";
import recepies from "./recepies.json";

function App() {
  return (
    <div className="App">
      <RecipeList items={recepies} />
    </div>
  );
}

export default App;
