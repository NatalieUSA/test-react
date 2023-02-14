import "./App.css";

const pageTitle = "about react";
const isHomePage = true;
const pageNumber = 1;
function App() {
  return (
    <>
      <header>dskjfsl</header>
      <main>
        <h1>{pageTitle} </h1>
        <p>
          {isHomePage
            ? "welcome Natalie  (isHomePage ? welcome Natalie : contact page)"
            : "contact page"}
        </p>
        <p>This is {pageNumber} page</p>
        <p className="greeteng">hi REACT</p>
      </main>
      <footer>
        <label htmlFor="title"></label>
        <input
          id="title"
          placeholder="my new expirience"
          autoComplete=""
        ></input>
      </footer>
    </>
  );
}

export default App;
