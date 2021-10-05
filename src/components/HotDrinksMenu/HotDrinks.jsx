import React from 'react'
import { Sidebar } from '../Home/Sidebar/Sidebar'
import menu from '../../menu.json'
import './HotDrinks.css'
import { OrderList } from '../OrderList/OrderList'

export const HotDrinks = () => {

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

    const hotItems = menu.hot

    return (
        <div className="main-menu-hot">
        <Sidebar></Sidebar>
        <main className="pos-container-hot">
            <div className="menu-container-hot">
                <div className="card-container-hot">
                    {
                        hotItems.map((item) =>{
                           return <div key={item.id} className="card-item-hot">
                                    <h4 className="item-tittle-hot">{item.name}</h4>
                                    <img src={item.img} alt="item menu" className="item-img-hot" />
                                    <p className="item-desc">{item.desc}</p>
                                    <button onClick={() => onAdd(item)} className="item-btn">Agregar a orden</button>   
                                </div>
                        })
                    }
                </div> 
            </div>
            <div className="order-container">
                <OrderList
                  onAdd={onAdd}
                  orderItems={orderItems}
                ></OrderList>
            </div>
        </main>
    </div>
    )
}
