import Product from "../products/Product"


const bike = [
    {
        id: 1,
        name: 'SOFTAIL® STANDARD', 
        price: 'Starting at $14,399',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, veritatis.', 
        img: '../public/bike-1.jpg'
    },
    {
        id: 2, 
        name: 'STREET BOB® 114',
        price: 'Starting at $16,599',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus harum magnam hic exercitationem odit fugit.', 
        img: '../public/bike-2.jpg'
    },
    {
        id: 3, 
        name: 'LOW RIDER® S', 
        price: 'Starting at $18,199',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, veritatis.', 
        img: '../public/bike-3.jpg'
    },
    {
        id: 4, 
        name: 'LOW RIDER® ST', 
        price: 'Starting at $22,199',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus harum magnam hic exercitationem odit fugit.', 
        img: '../public/bike-4.jpg'
    },
    {
        id: 5, 
        name: 'BREAKOUT® 117', 
        price: 'Starting at $20,999',
        title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, veritatis.', 
        img: '../public/bike-5.jpg'
    },
    {
        id: 6, 
        name: 'HERITAGE CLASSIC', 
        price: 'Starting at $21,199',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus harum magnam hic exercitationem odit fugit.', 
        img: '../public/bike-6.jpg'
    },
]


function AllProducts() {
    return (
        <div className='products'>
            {
                bike.map(product => <Product key={product.id} product={product} />)
            }
        </div>
    )
}

export default AllProducts