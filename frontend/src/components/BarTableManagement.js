import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BarTableManagement = () => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/bar-tables')
            .then(response => setTables(response.data))
            .catch(error => console.error('Error fetching bar table data:', error));
    }, []);

    return (
        <div>
            <h2>Bar Table Management</h2>
            <ul>
                {tables.map(table => (
                    <li key={table.id}>
                        Table {table.table_number} - Status: {table.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BarTableManagement;
