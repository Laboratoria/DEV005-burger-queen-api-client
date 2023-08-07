import React from 'react';
import { useState } from 'react';
import close from '../../assets/close.png';
import './modalAddProduct.css'
import api from '../../api_client/api';

const ModalEditProduct = ({ cancel, product }) => {

    const token = localStorage.getItem('token');
    // console.log('product--contenido: ', product)
    //llamo a la api para editar producto
    const [name, setName] = useState(product.name)
    const [id, setId] = useState(product.id)
    const [price, setPrice] = useState(product.price)
    const [type, setType] = useState(product.type)
    const [img, setImg] = useState(product.image)

    const fetchEditProducts = async (e) => {
        e.preventDefault()

        await api().fetchEditProducts(token, {
            name,
            id,
            price,
            type,
            img,
        });
        cancel();
    }

    return (
        <div className="modal-add">
            <div className="modal-content-add">
                <p className="title-add" > Edit product</p>
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />

                </figure>

                <form className='content-item' onSubmit={fetchEditProducts}>
                    <div className='item' >
                        <label>Name:</label>
                        <input className="inp-modal" type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />
                    </div>


                    <div className='item'>
                        <label>Image:  </label>
                        <input className="inp-modal" type="text" placeholder="Enter URL" defaultValue={img} onChange={(e) => setImg(e.target.value)} />
                    </div>

                    <div className='item-select-price'>
                        <div className='item-select'>
                            <label className='labels'>Type:</label>
                            <select className="inp-select" name="select" value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="Desayuno">Breakfast</option>
                                <option value="Almuerzo">Lunch</option>
                            </select>
                        </div>


                        <div className='item-price'>
                            <label className='labels'>Price:$</label>
                            <input className="inp-price" type="number" placeholder="1000" defaultValue={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>

                    </div>

                    <input type="submit" className="btn-add" value="Save" />

                </form>



            </div>
        </div>
    );
};

export default ModalEditProduct;