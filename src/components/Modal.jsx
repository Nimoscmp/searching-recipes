import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext';

export default function Modal() {

    const {detailedRecipe, modalLoaded} = useContext(ModalContext);

    return (
        <>
            
            <div className="modal fade" id="ModalBox" tabIndex="-1" aria-labelledby="ModalBoxLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {modalLoaded ?
                        <>
                            <div className="modal-header">
                                <h5 className="modal-title text-success">{detailedRecipe[0].strDrink}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex align-items-center flex-column">
                                    <img src={detailedRecipe[0].strDrinkThumb} alt="{detailedRecipe[0].strDrinkThumb}" className="img-thumbnail"/>
                                    <span className="text-secondary">{detailedRecipe[0].strCategory}</span>
                                </div>
                                <hr/>
                                <p><strong>Ingredients:</strong></p>
                                <ul>
                                    <li>{detailedRecipe[0].strIngredient1}</li>
                                    <li>{detailedRecipe[0].strIngredient2}</li>
                                    <li>{detailedRecipe[0].strIngredient3}</li>
                                </ul>
                                <p><strong>Instructions:</strong></p>
                                <p>{detailedRecipe[0].strInstructions}</p>

                            </div>
                            <div className="modal-footer">
                                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button> */}
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
