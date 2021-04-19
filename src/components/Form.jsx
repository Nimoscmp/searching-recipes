import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

export default function Form() {

    const {categories} = useContext(CategoriesContext);
    const {setSearchingRecipe, saveConsult} = useContext(RecipesContext);
    
    const [searchValue, setSearchValue] = useState({
        ingredient: '',
        category: ''
    });

    //Get data from recipe
    const getSearch = (e) => {
        setSearchValue({
            ...searchValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchingRecipe(searchValue);
        saveConsult(true);
    }

    return (
        <>
            <form 
                className="row"
                onSubmit={handleSubmit}>
                <fieldset className="text-center col-12 p-0">
                    <legend className="my-1">
                        Busca bebidas por categoría o ingrediente
                    </legend>
                </fieldset>

                <div className="col-11 col-md-5">
                    <div className="input-group m-3">
                        <span className="input-group-text" id="name">Buscar</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Busca por ingrediente" 
                            aria-label="Username" 
                            aria-describedby="name" 
                            name="ingredient"
                            onChange={getSearch}/>
                    </div>
                </div>

                <div className="col-11 col-md-5">
                    <div className="input-group m-3 col-9 col-sm-5">
                        <label className="input-group-text" htmlFor="inputSelect">Opciones</label>
                        <select 
                            className="form-select" 
                            id="inputSelect"
                            name="category"
                            onChange={getSearch}>
                            <option defaultValue>Selecciona categoría...</option>
                            {categories.map(item => (
                                <option
                                    key={item.strCategory}
                                    value={item.strCategory}
                                >{item.strCategory}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <button 
                        type="submit" 
                        className="btn btn-outline-primary m-3 col-11 col-md-auto"

                        >Buscar recetas</button>
                </div>

            </form>
        </>
    )
}
