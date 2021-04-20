import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext';

export default function Modal() {

    const {detailedRecipe, modalLoaded, setModalLoaded, setDetailedRecipe} = useContext(ModalContext);

    const handleClose = () => {
        setDetailedRecipe([0]);
        setModalLoaded(false);
    }

    const showIngredients = array => {
        let ingredients = [];
        for (let i = 0; i < 16; i++) {
            if (array[`strIngredient${i}`]) {
                ingredients.push(
                <li key={array[`strIngredient${i}`]}>{array[`strIngredient${i}`]} ({array[`strMeasure${i}`] ? array[`strMeasure${i}`] : 'to taste'})</li>
                );
            }
        }

        return ingredients;
    }

    return (
        <>
            
            <div className="modal fade" id="ModalBox" tabIndex="-1" aria-labelledby="ModalBoxLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {modalLoaded ?
                        <>
                            <div className="modal-header">
                                <h5 className="modal-title text-success">{detailedRecipe[0].strDrink}</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    data-bs-dismiss="modal" 
                                    aria-label="Close"
                                    onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex align-items-center flex-column">
                                    <img src={detailedRecipe[0].strDrinkThumb} alt="{detailedRecipe[0].strDrinkThumb}" className="img-thumbnail img-mini rounded"/>
                                    <span className="text-secondary">{detailedRecipe[0].strCategory}</span>
                                </div>
                                <hr className="my-1"/>
                                <p><strong>Ingredients:</strong></p>
                                <ul>
                                    {showIngredients(detailedRecipe[0])}
                                </ul>
                                <p><strong>Instructions:</strong></p>
                                <p>{detailedRecipe[0].strInstructions ? detailedRecipe[0].strInstructions : 'Mix all softly'}</p>
                            </div>
                        </>
                        :
                        <>
                            <div className="modal-header">
                                <span className="h4 m-1 text-success">Cargando...</span>
                                <div className="spinner-grow text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
