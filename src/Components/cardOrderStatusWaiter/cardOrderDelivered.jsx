import React from 'react';
import './CardOrderDelivered.css'

export default function CardOrderDelivered({ status, client, items, }) {

    return (

        <div className='card-order-delivered'>
            <p className='item'>{status}</p>
            <p className='text-cards-name-delivered'>Client: <span>{client}</span></p>

            <div>
                {items?.map((item, index) => {
                    return <div key={index}>

                        <div className='box-card-delivered'>

                            <div className='info-card-deliverd'>
                                <p className='item-card-delivered' >Product: <span className='span-card-delivered'>{item?.product?.name}</span></p>
                                <p className='item-card-delivered' >Quantity: <span className='span-card-delivered'>{item.qty}</span></p>
                                <p className='item-card-delivered' >Type: <span className='span-card-delivered'>{item?.product?.type}</span></p>
                            </div>

                            <div className='img-card-delivered'>
                                <img src={item?.product?.image} />
                            </div>

                        </div>


                    </div>

                })}
            </div>


        </div >
    )
}