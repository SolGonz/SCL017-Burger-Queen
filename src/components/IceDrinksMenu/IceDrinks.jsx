import React from 'react'
import './IceDrinks.css'
import menu from '../../menu.json'
import { Sidebar } from '../Home/Sidebar/Sidebar'

// console.log(menu)

export const IceDrinks = () => {

    const iceItems = menu.ice


    return (
        <div className="main-menu">
            <Sidebar></Sidebar>
            <main className="pos-container">
                <div className="menu-container">
                    <div className="card-container">
                        {
                            iceItems.map((item) =>{
                               return <div key={item.id} className="card-item">
                                        <h4 className="item-tittle">{item.name}</h4>
                                        <img src={item.img} alt="item menu" className="item-img" />
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
