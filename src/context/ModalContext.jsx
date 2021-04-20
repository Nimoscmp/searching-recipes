import { createContext, useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [recipeId, setRecipeId] = useState(null);
    const [detailedRecipe, setDetailedRecipe] = useState([0]);
    const [modalLoaded, setModalLoaded] = useState(false);

    useEffect(() => {
        
        const getApi = async() => {
            const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
            const response = await axios.get(baseUrl);
            setDetailedRecipe(response.data.drinks);
        }
        
        if (recipeId !== null) {
            getApi();
        }

        setModalLoaded(true);
        
    }, [recipeId])  

    return (  
        <ModalContext.Provider
            value={{setRecipeId, detailedRecipe, modalLoaded}}>
                {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;
