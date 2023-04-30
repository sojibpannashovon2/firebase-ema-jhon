import React, { useContext } from 'react';
import { authProvider } from '../provider/AuthProvider';

const Inventory = () => {
    const { user } = useContext(authProvider);
    return (
        <div>
            <h3>Inventory page   </h3>
        </div>
    );
};

export default Inventory;