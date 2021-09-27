import React from 'react'
import './Sidebar.css'

export const Sidebar = () => {
    return (
        <div className="nav-container">
             <nav>
                <a href="/home">
                    <img src="https://picsum.photos/55" alt="random" className="img-sidebar"></img>
                </a>
            </nav>
        </div>
    )
}
