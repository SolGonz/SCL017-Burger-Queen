import React from 'react'
import { Sidebar } from '../Home/Sidebar/Sidebar'
import './Bakery.css'
import menu from '../../menu.json'

export const Bakery = () => {

    const foodItems = menu.food

    return (
        <div className="main-menu-hot">
        <Sidebar></Sidebar>
        <main className="pos-container-hot">
            <div className="menu-container-hot">
                <div className="card-container-hot">
                    {
                        foodItems.map((item) =>{
                           return <div key={item.id} className="card-item-hot">
                                    <h4 className="item-tittle-hot">{item.name}</h4>
                                    <img src={item.img} alt="item menu" className="item-img-hot" />
                                    <p className="item-desc">{item.desc}</p>
                                    <button className="item-btn">Agregar a orden</button>   
                                </div>
                        })
                    }
                </div> 
                <button className="btn-orders"></button>
                <p className="p-btn">Lista de pedidos</p>
            </div>
            <div className="order-container"></div>
        </main>
    </div>
    )
}
