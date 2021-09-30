import React from 'react'
import './Sidebar.css'

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
                    <button className="btn-ice"></button>
                    <h4 className="name-menu">Ice drinks</h4>
                    <button className="btn-hot"></button>
                    <h4 className="name-menu">Hot drinks</h4>
                    <button className="btn-food"></button>
                    <h4 className="name-menu">Pastelería</h4>
                </div>
            </aside>
        </div>
    )
}
