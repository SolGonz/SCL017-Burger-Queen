import React from 'react'
import './IceDrinks.css'
import menu from '../../menu.json'
import { Sidebar } from '../Home/Sidebar/Sidebar'
import {Orders} from '../Orders/Orders'
import IceItems from './IceItems'



export const IceDrinks = () => {
    const menuIce = menu.ice

    console.log(menuIce)
    
    //estado del menu de ice drinks
    const [iceDrinks, setIceDrinks] = React.useState(menuIce)

    //Estado de las ordenes
    const [orderList, setOrderList] = React.useState([])

    console.log(orderList)



    return (
        <div className="main-menu">
            <Sidebar></Sidebar>
            <main className="pos-container">
                <div className="menu-container">
                    <div className="card-container">
                        {
                            iceDrinks.map((iceDrink) =>{
                               return <IceItems 
                                    key={iceDrink.id}
                                    iceDrink={iceDrink}
                                    orders={orderList}
                                    setOrders={setOrderList}
                                    iceDrinks={iceDrinks}
                                />
                            })
                        }
                    </div> 
                    <button className="btn-orders"></button>
                    <p className="p-btn">Lista de pedidos</p>
                </div>
                <div className="order-container">
                    <Orders
                        orderList={orderList}
                        setOrderList={setOrderList}
                    />
                </div>
            </main>
        </div>
    )
}
