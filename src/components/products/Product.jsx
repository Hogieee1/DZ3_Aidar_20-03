import React, { useState} from "react";
import styles from './product.module.css'




function Product({product}) {
    const wishlist = (e) => {
        e.preventDefault

        if (e.target.innerHTML === 'Add to wishlist') {
            e.target.innerHTML = 'Added to wishlist'
            alert(`Bike ${product.name} added to wishlist`)
            e.target.classList.add(styles.added)
        } 
        else if (e.target.innerHTML === 'Added to wishlist') {
            e.target.innerHTML = 'Add to wishlist'
            alert(`Bike ${product.name} removed from wishlist`)
            e.target.classList.remove(styles.added)
        }


    }
    return (
        <div className={styles.product}>
            <img src={product.img} alt='bike-img'/>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
            <p>{product.title}</p>
            <button className={styles.wishlistBtn} onClick={wishlist}>Add to wishlist</button>
        </div>
    )
}

export default Product