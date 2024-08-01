import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KitchenOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/kitchen-orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error('Error fetching kitchen orders data:', error));
    }, []);

    return (
        <div>
            <h2>Kitchen Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.dish_name} - Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default KitchenOrders;
