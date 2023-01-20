import styles from './product.module.css'


function Product({product}) {
    return (
        <div className={styles.product}>
            <img src={product.img} alt='bike-img'/>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
            <p>{product.title}</p>
        </div>
    )
}

export default Product