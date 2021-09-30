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
                    <a href="/ice-drinks">
                         <img src="https://firebasestorage.googleapis.com/v0/b/bobbi-tea.appspot.com/o/bubble.tea.png?alt=media&token=90acffc4-480c-42f1-a135-0945942f1c5b" alt="random" className="img-sidebar"></img>
                    </a>
                    <h4 className="name-menu">Ice drinks</h4>
                    <a href="/hot-drinks">
                         <img  src="https://firebasestorage.googleapis.com/v0/b/bobbi-tea.appspot.com/o/hot-drinks.png?alt=media&token=06530710-b2af-48de-99c3-5ed973410a64" alt="random" className="img-sidebar"></img>
                    </a>
                    <h4 className="name-menu">Hot drinks</h4>
                    <a href="/bakery">
                         <img src="https://firebasestorage.googleapis.com/v0/b/bobbi-tea.appspot.com/o/cake.png?alt=media&token=75bb19e7-a591-4e80-81ee-5d739058929a" alt="random" className="img-sidebar"></img>
                    </a>
                    <h4 className="name-menu">Pastelería</h4>
                </div>
            </aside>
        </div>
    )
}
