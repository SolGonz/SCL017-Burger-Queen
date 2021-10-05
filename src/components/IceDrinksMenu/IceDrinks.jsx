import React from 'react'
import './IceDrinks.css'
import menu from '../../menu.json'
import { Sidebar } from '../Home/Sidebar/Sidebar'
import { OrderList } from '../OrderList/OrderList'


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
                            menuIce.map((item) =>{
                               return <div key={item.id} className="card-item">
                                        <h4 className="item-tittle">{item.name}</h4>
                                        <img src={item.img} alt="item menu" className="item-img" />
                                        <p className="item-desc">{item.desc}</p>
                                        <p className="item-price">${item.price}</p>
                                        <button className="item-btn">Agregar a orden</button>   
                                    </div>
                            })
                        }
                    </div> 
                    <button className="btn-orders"></button>
                    <p className="p-btn">Lista de pedidos</p>
                </div>
                <div className="order-container">
                    <OrderList />
                </div>
            </main>
        </div>
    )
}
