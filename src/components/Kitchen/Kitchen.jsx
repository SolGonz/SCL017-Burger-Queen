import React from 'react'
import { db } from '../../firebase'

export const Kitchen = () => {

    const [orders, setorders] = React.useState([])

    React.useEffect(()=> {

        const getOrders = async () => {
            try {
                const data = await db.collection('orders').get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                // console.log(arrayData)
                setorders(arrayData) 
                
            } catch (error) {
                console.log(error)
            }

        }

        getOrders()

    }, [])

    return (
        <div>
            <div>
                        {
                            orders.map(item => { 
                                console.log(item)
                                return <div>
                                    {item.id}
                                </div>
                                })
                                 
                                
                        }
            </div>
        </div>
    )
}
