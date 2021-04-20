import { createContext, useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [recipeId, setRecipeId] = useState(null);
    const [detailedRecipe, setDetailedRecipe] = useState([]);

    useEffect(() => {
        
        const getApi = async() => {
            const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
            const response = await axios.get(baseUrl);
            setDetailedRecipe(response.data.drinks);
        }
        
        getApi();
        
    }, [recipeId])  

    return (  
        <ModalContext.Provider
            value={{setRecipeId}}>
                {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;
