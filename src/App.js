import Form from "./components/Form";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import CategoriesProvider from "./context/CategoriesContext";
import ModalProvider from "./context/ModalContext";
import RecipesProvider from "./context/RecipesContext";


function App() {
  return (
    <RecipesProvider>
        <CategoriesProvider>
            <ModalProvider>
                <Header />
                <Form />
                <RecipeList />
            </ModalProvider>
        </CategoriesProvider>
    </RecipesProvider>      
  );
}

export default App;
