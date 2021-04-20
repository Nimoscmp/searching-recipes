import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [resultRecipe, setResultRecipe] = useState([]);
    const [searchingRecipe, setSearchingRecipe] = useState({
        ingredient: '',
        category: ''
    });
    const [consult, saveConsult] = useState(false);

    const {ingredient, category} = searchingRecipe;

    useEffect(() => {
        if (consult) {
            const getApi = async() => {
                const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;

                const response = await axios.get(baseUrl);
                setResultRecipe(response.data.drinks);
                // saveConsult(false);
            }
            
            getApi();
        }

        // eslint-disable-next-line  
    }, [searchingRecipe])

    return(
        <RecipesContext.Provider
        value={{resultRecipe, setSearchingRecipe, consult, saveConsult}} >
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider;


