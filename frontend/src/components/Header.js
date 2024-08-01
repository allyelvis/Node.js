import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sales">Sales</Link></li>
                    <li><Link to="/purchases">Purchases</Link></li>
                    <li><Link to="/kitchen-orders">Kitchen Orders</Link></li>
                    <li><Link to="/inventory">Inventory</Link></li>
                    <li><Link to="/guest-billing">Guest Billing</Link></li>
                    <li><Link to="/bar-tables">Bar Tables</Link></li>
                    <li><Link to="/restaurant-pos">Restaurant POS</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
