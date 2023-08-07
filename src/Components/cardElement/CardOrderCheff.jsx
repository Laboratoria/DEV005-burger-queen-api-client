import React from 'react';
import './CardOrderCheff.css'
import '../../Components/cardOrderStatusWaiter/cardOrderStatus'

export default function CardOrderCheff({ status, client, items, }) {

    return (

        <div className='card-order-cheff- card-order-view'>
            <p className='item'>{status}</p>
            <p className='text-cards-name'>Client: <span>{client}</span></p>

            <div>
                {items?.map((item, index) => {
                    return <div key={index}>

                        <div className='box-card'>
                            <div className='info-card'>
                                <p className='item-card' >Product: <span className='span-card'>{item?.product?.name}</span></p>
                                <p className='item-card' >Quantity: <span className='span-card'>{item.qty}</span></p>
                                <p className='item-card' >Type: <span className='span-card'>{item?.product?.type}</span></p>
                            </div>
                            <div className='img-card'>
                                <img src={item?.product?.image} />
                            </div>
                        </div>


                    </div>

                })}
            </div>


        </div >
    )
}