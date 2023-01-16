import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        getRecipes();

    });

    const getRecipes = async () => {
        const data = require('./constants/recipes.json');
        setRecipes(data.recipes);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');

    };

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} placeholder="⚠️ Search bar is currently inactive. ⚠️" onChange={updateSearch} />
                <button className="search-button" type="Submit">search</button>
            </form>
            <p>Made by&nbsp;<a href="https://www.linkedin.com/in/dan-blevins/" target="_blank">Dan Blevins</a>. View on&nbsp;<a href="" target="_blank">GitHub</a>.</p>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe
                        title={recipe.label}
                        titleLink={recipe.label.replace(/\s+/g, '-').toLowerCase()}
                        image={recipe.image}
                        serves={recipe.serves}
                        time={recipe.time}
                        ingredients={recipe.ingredientsList}
                        url={recipe.url}
                    />
                ))}
            </div>
        </div>
    );
}




export default App;