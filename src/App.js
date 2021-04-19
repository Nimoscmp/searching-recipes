import Form from "./components/Form";
import Header from "./components/Header";
import CategoriesProvider from "./context/CategoriesContext";
import RecipesProvider from "./context/RecipesContext";


function App() {
  return (
    <RecipesProvider>
        <CategoriesProvider>
            <Header />
            <Form />
        </CategoriesProvider>
    </RecipesProvider>      
  );
}

export default App;
