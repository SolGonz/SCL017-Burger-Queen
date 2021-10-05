import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export const Sidebar = () => {

    return (
        <div className="nav-container">
             <aside className="sidebar"> 
                <div className="logo">
                    <a href="/home">
                         <img className="img-logo" src="https://firebasestorage.googleapis.com/v0/b/bobbi-tea.appspot.com/o/logo.png?alt=media&token=7204a33c-a5d0-4716-aec1-f868f0a712bc" alt="random"></img>
                    </a>
                </div>
                    <div className="menu-list-container">
                        <Link to="/ice-drinks">
                            <button className="btn-ice" ></button>
                        </Link>
                        <h4 className="name-menu">Ice drinks</h4>
                        <Link to="/hot-drinks">
                            <button className="btn-hot"></button>
                        </Link>
                        <h4 className="name-menu">Hot drinks</h4>
                        <Link to="/bakery">
                            <button className="btn-food"></button>
                        </Link>
                    <h4 className="name-menu">Pastelería</h4>
                </div>
                <div className="btn-order-container">
                        <button className="btn-order"></button>
                        <p className="p-btn-order">Lista de pedidos</p>
                </div>
            </aside>
        </div>
    )
}
