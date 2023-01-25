import { useState } from 'react'
import styles from './search.module.css' 



function Search({handle}) {

    const [count, setCount] = useState('0')

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src='public/logo.jpg'/>
            </div>

            <form className={styles.search}>
                <input type='text' onChange={handle}/>
                <button>Search</button>
            </form>

            <div className={styles.wishlist}>
                <h3>Wishlist</h3>
                <span>{count}</span>
            </div>
        </header>
    )
}

export default Search