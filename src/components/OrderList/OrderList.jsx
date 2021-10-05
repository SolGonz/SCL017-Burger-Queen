import React from 'react'
import './OrderList.css'


export const OrderList = (props) => {

    const {orderItems, onAdd, onRemove} = props;

    const totalOrder = orderItems.reduce((a, c ) => a + c.price * c.qty, 0)
   

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
                <div></div>
                <div>${totalOrder}</div>
                </>
            )}
        </div>
    )
}
