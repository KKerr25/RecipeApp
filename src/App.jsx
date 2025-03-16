import Header from "./components/Layout/Header.jsx";
import Recipes from "./components/Recipes/Recipes.jsx";
import AddButton from "./components/Layout/AddButton.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Recipes />
        <AddButton />
      </main>
    </>
  );
}

export default App;
