import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext';
import { RecipesContext } from '../context/RecipesContext'
import Modal from './Modal';

export default function RecipeList() {

    const {resultRecipe, consult} = useContext(RecipesContext);
    const {setRecipeId} = useContext(ModalContext);

    return (
        <>
        <Modal />
        <section className="row p-2 w-100 m-0">
            {consult?
            <h5 className="col-12 px-2 m-0 my-2">Se encontraron {resultRecipe.length} resultados:</h5>
            :
            null
            }
            <div className="col-12 p-0 d-flex justify-content-center justify-content-sm-start" id="card-container">
                {resultRecipe.map(item => (
                    <div 
                        className="card m-1 my-2 p-1" 
                        style={{minWidth: '14rem', maxWidth: '14rem'}}
                        key={item.idDrink}>
                        <img 
                            src={item.strDrinkThumb} 
                            className="card-img-top rounded" 
                            alt={item.strDrinkThumb}
                            />
                        <div className="card-body row d-flex flex-column align-items-start justify-content-start">
                            <h6 className="card-title my-1 pb-3">{item.strDrink}</h6>
                            <span className="card-text mb-1">This is the {item.strDrink} recipe.</span>
                            <span className="text-success text-center"><strong>${Math.round(item.idDrink / 1000)}</strong></span>
                            <button
                                type="button"
                                data-bs-toggle="modal" 
                                data-bs-target="#ModalBox"
                                className="btn btn-success"
                                onClick={() => {setRecipeId(item.idDrink)} }>Ver detalles</button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
        </>
    )
}
