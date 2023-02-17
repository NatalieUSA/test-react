import { RecipeList } from "./RecipeList/RecipeList";
import recepies from "./recepies.json";
import { GlobalStyle } from "./GlobalStyle";
import "modern-normalize";
import { Layout } from "./Layout";
// import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <Layout>
      <RecipeList items={recepies} />
      <GlobalStyle />
    </Layout>
  );
}

export default App;
