import React from 'react'
import './Home.css'
import { db } from '../../firebase'


const Home = () => {

    const [costumer, setCostumer] = React.useState('')
    const [table, setTable] = React.useState('')

    const enviar = async (e) => {
        e.preventDefault()

        if(!costumer.trim()){
            alert('Ingresar nombre')
            return
        }
        
        try {
            const newOrder = {
                name: costumer,
                table: table,
                fecha: Date.now()
            }
            const orders = await db.collection('orders').add(newOrder)
            setTable('')
            setCostumer('')

            console.log(orders)

        } catch (error) {

        }
        console.log(costumer)
        console.log(table)
        window.location.href = '/ice-drinks'
    }

    return (
        <div className="home-container">
            <aside className="sidebar-home">
            <div className="logo">
                    <a href="/home">
                         <img className="img-logo" src="https://firebasestorage.googleapis.com/v0/b/bobbi-tea.appspot.com/o/logo.png?alt=media&token=7204a33c-a5d0-4716-aec1-f868f0a712bc" alt="random"></img>
                    </a>
                </div>
            </aside>
            <div className="main">
                <form className="form" onSubmit={enviar}>
                    <h4 className="tables-tittle">Nombre cliente</h4>
                    <input 
                        className="input-name" 
                        type="text" 
                        placeholder= "Ingresa nombre de cliente"
                        onChange = { e => setCostumer(e.target.value)}
                        value={costumer}
                        />
                    <h4 className ="tables-tittle">Selecciona la mesa</h4>
                    <select 
                        name="mesas" 
                        className="select-tables"
                        onChange= { e => {
                            const selectedTable = e.target.value;
                            setTable(selectedTable)
                        
                         } }
                        >
                        <option value="0">...</option>
                        <option value="Mesa 1">Mesa 1</option>
                        <option value="Mesa 2">Mesa 2</option>
                        <option value="Mesa 3">Mesa 3</option>
                        <option value="Mesa 4">Mesa 4</option>
                        <option value="Mesa 5">Mesa 5</option>
                        <option value="Mesa 6">Mesa 6</option>
                    </select>
                    <button 
                    className="btn-table" 
                    type = "submit"
                    >
                    Enviar cliente
                </button>
                </form>
            </div>
        </div>

    )
}

export default Home
