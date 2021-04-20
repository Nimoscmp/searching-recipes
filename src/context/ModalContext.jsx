import { createContext } from "react";
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {



    return (  
        <ModalContext.Provider
            value={{}} >
                {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;
