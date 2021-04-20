import React, { useContext } from 'react'
import { RecipesContext } from '../context/RecipesContext'

export default function RecipeList() {

    const {resultRecipe, consult} = useContext(RecipesContext);

    const handleSeeDetails = () => {

    }

    return (
        <>
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
                        <div className="card-body row">
                            <h5 className="card-title text-center">{item.strDrink}</h5>
                            <p className="card-text text-center">This is the {item.strDrink} recipe. </p>
                            <p className="text-success text-center"><strong>${Math.round(item.idDrink / 1000)}</strong></p>
                            <button
                                className="btn btn-success"
                                onClick={handleSeeDetails}>Ver detalles</button>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                ))}
            </div>

        </section>
        </>
    )
}
