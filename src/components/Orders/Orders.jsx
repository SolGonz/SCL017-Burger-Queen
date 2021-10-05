import React from 'react'
import IceItems from '../IceDrinksMenu/IceItems'
import { OrderList } from '../OrderList/OrderList'

export const Orders = ({orderList, setOrderList} ) => {

    console.log(orderList)
    return (
        <div>
            <h3>Order List</h3>
            {
            orderList.length === 0 ? (<p>No hay ordenes</p>) : (orderList.map((iceDrink =>  
            <IceItems 
                orderList={orderList}
                setOrderList={setOrderList}
                key={iceDrink.id} 
                iceDrinkN={iceDrink.name}  
            />)))
            }
        </div>
    )
}
