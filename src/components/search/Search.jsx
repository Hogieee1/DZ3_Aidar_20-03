import styles from './search.module.css' 


function Search() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src='public/logo.jpg'/>
            </div>

            <form className={styles.search}>
                <input type='text'/>
                <button>Search</button>
            </form>
        </header>
    )
}

export default Search