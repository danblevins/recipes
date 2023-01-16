import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, titleLink, serves, time, image, ingredients, url }) => {

    const route = "https://dan-recipes.surge.sh/#" + titleLink
    const smsMessage = `sms: &body= Let's make this tonight! ${route}`;

    return (
        <div className={style.recipe}>
            <div id={titleLink}></div>
            <h1><a href={url} target="_blank" rel="noreferrer">{title}</a></h1>
            <div className={style.emoji}>
                <a href={'#' + titleLink} className={style.link} onClick={() => navigator.clipboard.writeText(route)}
                >🔗   </a>
                <a href={smsMessage} className={style.link}>   💬</a>
            </div>
            <img className={style.image} src={image} alt="" />
            <p>Serves: {serves} --  Time: {time}</p>
            <div className={style.text}>
                {ingredients.map(ingredient => (
                    <ul><input type="checkbox" />{ingredient.text}</ul>
                ))}
            </div>
        </div>
    );
}

export default Recipe;