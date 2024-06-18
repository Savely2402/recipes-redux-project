import React from 'react'
import styles from './RecipeItem.module.css'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'

function RecipeItem({ recipe }) {
    const favorites = useSelector((state) => state.favorites)

    const { toggleFavorites } = useActions()

    console.log(favorites)

    return (
        <div className={styles.item}>
            <h3>{recipe.name}</h3>
            <button onClick={() => toggleFavorites(recipe)}>
                {favorites.some((r) => r.id === recipe.id)
                    ? 'Remove from '
                    : 'Add to '}{' '}
                favorites
            </button>
        </div>
    )
}

export default RecipeItem
