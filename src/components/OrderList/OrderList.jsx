import React from 'react'
import './OrderList.css'
import { db } from '../../firebase';



export const OrderList = (props) => {

    const {orderItems, onAdd, onRemove} = props;
   

    const totalOrder = orderItems.reduce((a, c ) => a + c.price * c.qty, 0)

    // const totalOrder = {...orderItems};
    // let itemName = []
    

    // const holi = () => {
    //     Object.entries(orderSummary).forEach(([key, value]) => {
    //         itemName = value.name
            
    //     })
    //     return itemName
    // }


   

    const enviar = async (e) => {
        e.preventDefault()

            try {
                const newOrder = {
                    fecha: Date.now(),
                }

                const orders = await db.collection('orders').add(newOrder)
                console.log(orders)
                window.location.reload();
    
    
            } catch (error) {
    
            }
    }

  

   

    return (
        <div className="items-container">
            <div>{orderItems.length === 0 && <p>No hay items en la orden</p>}</div>
            {orderItems.map((item, index) => (
                <div key={index} className="item-card">
                    <h2 className="item-order-tittle">{item.name}</h2>
                    <div className="order-details-container">
                        <span className="order-details">
                            {item.qty} x ${item.price}
                        </span>
                        <button className="card-btn" onClick={() => onAdd(item)}>+</button>
                        <button className="card-btn" onClick={() => onRemove(item)}>-</button>
                    </div>
                </div>
            ))}
            {orderItems.length !== 0 && (
                <>
                <hr />
                <form >
                    <span className="total-order">Total Order ${totalOrder}</span>
                    <div>
                        <button className="send-btn" onClick={enviar}>Enviar</button>
                        <button className="send-btn">Cancelar</button>
                    </div>
                </form>
                </>
            )}
        </div>
    )
}
