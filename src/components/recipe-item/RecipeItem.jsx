import React from 'react'
import styles from './RecipeItem.module.css'

function RecipeItem({ recipe }) {
    return (
        <div className={styles.item}>
            <h3>{recipe.name}</h3>
            <button>Add to favorites</button>
        </div>
    )
}

export default RecipeItem
