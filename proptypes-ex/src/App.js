import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import Button from "./components/Button/Button";
function App() {
  return (
    <>
      <Header />
      <div>
        <Button text="first btn" type="button" active={true} />
      </div>
      <Main />

      <Button text="second btn" type="button" />
      <Footer />
      <Button text="third btn" type="button" active={true} />
    </>
  );
}

export default App;
