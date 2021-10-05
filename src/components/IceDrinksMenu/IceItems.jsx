import React from 'react'


const IceItems = ({iceDrink, orderList, setOrderList, iceDrinks}) => {

    console.log(orderList)

    const addItem = (id) => {
        const iceDrink = iceDrinks.filter((iceDrink) => id === iceDrink.id )
        setOrderList([...orderList, ...iceDrink])
    } 


    return (
        <div>
            <div key={iceDrink.id} className="card-item">
                <h4 className="item-tittle">{iceDrink.name}</h4>
                <img src={iceDrink.img} alt="item menu" className="item-img" />
                <p className="item-desc">{iceDrink.desc}</p>
                <p className="item-price">${iceDrink.price}</p>
                    <button 
                        type="button"
                        className="item-btn"
                        onClick={() => addItem(iceDrinks.id)}
                    >
                    Agregar a orden
                    </button>   
            </div>
        </div>
    )
}

export default IceItems
