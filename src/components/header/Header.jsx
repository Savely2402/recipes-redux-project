import React from 'react'
import styles from './Header.module.css'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { useFavorites } from '../../hooks/useFavorites'

function Header() {
    const favorites = useFavorites()

    return (
        <header className={styles.header}>
            <span>{favorites.length}</span>
            <BsFillBookmarkHeartFill fontSize={20} />
        </header>
    )
}

export default Header
