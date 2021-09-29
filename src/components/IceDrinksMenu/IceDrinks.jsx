import React from 'react'
import './IceDrinks.css'
import menu from '../../menu.json'

// console.log(menu)

export const IceDrinks = () => {

    return (
        <div className="main-menu">
            <aside className="sidebar"> 
                <div className="logo">
                    <a href="/home">
                         <img src="https://picsum.photos/55" alt="random" className="img-sidebar"></img>
                    </a>
                </div>
                <div className="menu-list-container">
                    <a href="/ice-drinks">
                         <img src="https://picsum.photos/55" alt="random" className="img-sidebar"></img>
                         <h4>Ice drinks</h4>
                    </a>
                    <a href="/hot-drinks">
                         <img src="https://picsum.photos/55" alt="random" className="img-sidebar"></img>
                         <h4>Hot drinks</h4>
                    </a>
                    <a href="/bakery">
                         <img src="https://picsum.photos/55" alt="random" className="img-sidebar"></img>
                         <h4>Pastelería</h4>
                    </a>
                </div>
            </aside>
            <main className="pos-container">
                <div className="menu-container">
                    <h2>Hola</h2>
                </div>
                <div className="order-container"></div>
            </main>
        </div>
    )
}
