import React from "react"
import CardElement from '../cardElement/cardElement';
import './products.css'



export default function products({ products, handleClickProduct }) {
    return (
        <div className='content-list-breakfast' data-testid='card-element-0'>
            {products.map((product, index) => {
                return <CardElement
                    title={product.name}
                    key={product.id}
                    price={product.price}
                    image={product.image}
                    onClick={() => handleClickProduct(product)}
                    index={index} // Agregamos el índice como prop
                    data-testid={`card-element-${index}`}
                />
            })}
        </div>
    )
}