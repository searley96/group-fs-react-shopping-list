import React from 'react';
import axios from 'axios';


import Header from '../Header/Header.jsx';
import ShoppingListForm from '..ShoppingListForm/ShoppingListForm';
import './App.css';


function App() {


    const addShoppingList = (newList) => {
        axios.post('/shopping_list', newList)
        .then(response => {
            //clear inputs
            setNewShopingList('');
            setNewQuantity('');
            setNewUnit('');

            getShoppingList()
        }).catch((err) => {
            alert('Error in POST', err)
        })
    };

    return (
        <div className="App">
            <Header />
            <ShoppingListForm addItemToList={addShoppingList}/>
        </div>
    );
}

export default App;
