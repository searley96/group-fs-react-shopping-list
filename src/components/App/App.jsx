import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


import Header from '../Header/Header.jsx';
import ShoppingListForm from '../ShoppingListForm/ShoppingListForm';
import './App.css';
import GetShoppingList from '../GetShoppingList/GetShoppingList.jsx';



function App() {

    //const
const [shoppingList, setShoppingList] = useState([]);


    const addShoppingList = (newShopList) => {
        axios.post('/shopping_list', newShopList)
        .then(response => {
            getShoppingList()
        }).catch((err) => {
            alert('Error in POST', err)
        })
    };

//useEffect
useEffect(() => {
    getShoppingList()
}, []);

//get
const getShoppingList = () => {
    axios.get('/shopping_list')
    .then(response => {
        setShoppingList(response.data)
    })
    .catch(err => {
        alert('Error getting shopping list');
        console.log(err)
    })
}

    return (
        <div className="App">
            <Header />
            <ShoppingListForm addItemToList={addShoppingList}/>
            {/* <main>
                <p>Under Construction...</p>
            </main> */}
            <GetShoppingList list={shoppingList}/>
        </div>
    );
}

export default App;
