import styles from './navigation.module.css'

function Navigation() {
    return (
        <div className={styles.nav}>
            <a href='#'>Cruisers</a>
            <a href='#'>Sport</a>
            <a href='#'>Trike</a>
            <a href='#'>Adventure Touring</a>
        </div>
    )
}


export default Navigation