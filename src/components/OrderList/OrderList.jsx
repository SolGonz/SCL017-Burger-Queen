import React from 'react'
import './OrderList.css'
import { db } from '../../firebase';



export const OrderList = (props) => {

    const {orderItems, onAdd, onRemove} = props;
   

    const totalOrder = orderItems.reduce((a, c ) => a + c.price * c.qty, 0)



    const orderSummary = {...orderItems};

    const enviar = async (e) => {
        e.preventDefault()
   
        try {
            const newOrder = {
                order: orderSummary,
                fecha: Date.now(),
            }
            const orders = await db.collection('orders').add(newOrder)
            console.log(orders)
            window.location.reload();


        } catch (error) {

        }

    }

  

   

    return (
        <div>
            <h2 className="order-tittle">Order list</h2>
            <p className="order-subt">Items</p>
            <div>{orderItems.length === 0 && <p>No hay items en la orden</p>}</div>
            {orderItems.map((item, index) => (
                <div key={index} className="container-item">
                    <h2>{item.name}</h2>
                    <div>
                        <button onClick={() => onAdd(item)}>+</button>
                        <button onClick={() => onRemove(item)}>-</button>
                    </div>
                    <div>
                        {item.qty} x ${item.price}
                    </div>
                </div>
            ))}
            {orderItems.length !== 0 && (
                <>
                <hr />
                <form onSubmit={enviar}>
                    <div>${totalOrder}</div>
                    <div>
                        <button>Enviar</button>
                        <button>Cancelar</button>
                    </div>
                </form>
                </>
            )}
        </div>
    )
}
