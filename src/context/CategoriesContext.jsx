import { useEffect , useState, createContext} from "react";
import axios from 'axios';

//Create the context
export const CategoriesContext = createContext();

//Create provider, where the functions and states are
const CategoriesProvider = (props) => {

    const [categories, saveCategories] = useState([])

    useEffect(() => {
        const getApi = async() => {
            const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const response = await axios.get(baseUrl);
            saveCategories(response.data.drinks);
        }

        getApi();
    }, [])

    return(
        <CategoriesContext.Provider
            value={{categories}}>
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;