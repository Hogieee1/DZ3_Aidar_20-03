import styles from './navigation.module.css'

function Navigation({onLink}) {
    return (
        <div className={styles.nav}>
            <a href='#'>Cruisers</a>
            <a onClick={onLink} href='#'>Sport</a>
            <a onClick={onLink} href='#'>Trike</a>
            <a onClick={onLink} href='#'>Adventure Touring</a>
        </div>
    )
}


export default Navigation