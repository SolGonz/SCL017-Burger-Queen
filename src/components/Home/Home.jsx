import React from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <Sidebar></Sidebar>
            <div className="main">
                <div className="input-container">
                    <p className="input-tittle">Nombre cliente</p>
                    <input className="input-name" type="text" />
                </div>
                <div className="tables-container">
                    <button className="btn-table">Mesa 1</button>
                    <button className="btn-table">Mesa 2</button>
                    <button className="btn-table">Mesa 3</button>
                    <button className="btn-table">Mesa 4</button>
                    <button className="btn-table">Mesa 5</button>
                    <button className="btn-table">Mesa 6</button>
                </div>
            </div>
        </div>

    )
}

export default Home
