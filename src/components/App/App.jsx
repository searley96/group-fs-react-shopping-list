import React from 'react';
import axios from 'axios';


import Header from '../Header/Header.jsx';
import ShoppingListForm from '..ShoppingListForm/ShoppingListForm';
import './App.css';
import GetShoppingList from '../GetShoppingList/GetShoppingList.jsx';



function App() {

    //const
const [shoppingList, setShoppingList] = useState([]);


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
