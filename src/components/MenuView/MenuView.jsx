import React from 'react'
import './MenuView.css'
import menu from '../../menu.json'
import { Sidebar} from '../Home/Sidebar/Sidebar'
import { OrderList } from '../OrderList/OrderList'


export const Menu = () => {

    const menuIce = menu.ice
    const menuHot = menu.hot
    const menuFood = menu.food

    //Estado de las ordenes
    const [orderItems, setOrderItems] = React.useState([])

    const onAdd = (item) => {
        const exist = orderItems.find(x => x.id === item.id)
        if (exist){
            setOrderItems(orderItems.map(x => x.id === item.id ? {...exist, qty: exist.qty +1} : x) )
        } else {
            setOrderItems([...orderItems, {...item, qty: 1}])
        }
    }

    const onRemove = (item) => {
        const exist = orderItems.find(x => x.id === item.id)
        if (exist.qty === 1){
            setOrderItems(orderItems.filter(x => x.id !== item.id))
        } else {
            setOrderItems(orderItems.map(x => x.id === item.id ? {...exist, qty: exist.qty - 1} : x) )
        }
    }




    return (
        <div className="main-menu">
            <Sidebar></Sidebar>
            <main className="pos-container">
                <div className="menu-container">
                <h3>Bebidas frias</h3>
                    <div className="card-container">
                        {
                            menuIce.map((item) =>{
                               return <div key={item.id} className="card-item">
                                        <h4 className="item-tittle">{item.name}</h4>
                                        <img src={item.img} alt="item menu" className="item-img" />
                                        <p className="item-desc">{item.desc}</p>
                                        <p className="item-price">${item.price}</p>
                                        <button onClick={() => onAdd(item)} className="item-btn">Agregar a orden</button>   
                                    </div>
                            })
                        }
                    </div>
                    <h3>Bebidas calientes</h3>
                    <div className="card-container">
                        {
                            menuHot.map((item) =>{
                               return <div key={item.id} className="card-item">
                                        <h4 className="item-tittle">{item.name}</h4>
                                        <img src={item.img} alt="item menu" className="item-img" />
                                        <p className="item-desc">{item.desc}</p>
                                        <p className="item-price">${item.price}</p>
                                        <button onClick={() => onAdd(item)} className="item-btn">Agregar a orden</button>   
                                    </div>
                            })
                        }
                    </div>
                    <h3>Comida</h3>
                    <div className="card-container"> 
                        {
                            menuFood.map((item) =>{
                               return <div key={item.id} className="card-item">
                                        <h4 className="item-tittle">{item.name}</h4>
                                        <img src={item.img} alt="item menu" className="item-img" />
                                        <p className="item-desc">{item.desc}</p>
                                        <p className="item-price">${item.price}</p>
                                        <button onClick={() => onAdd(item)} className="item-btn">Agregar a orden</button>   
                                    </div>
                            })
                        }
                </div>
                </div>
                <div className="order-container">
                    <h2 className="order-tittle">Order list</h2>
                    <OrderList 
                        onAdd={onAdd}
                        onRemove={onRemove}
                        orderItems={orderItems}
                        setOrderItems={setOrderItems}
                    />
                </div>
            </main>
        </div>
    )
}
