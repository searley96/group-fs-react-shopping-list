import { useState, useEffect } from 'react';




function GetShoppingList({list, buyBtn}) {

function GetShoppingList({list, clearAllItems}) {

    console.log('in GetShoppingList', list)

    
    return (
       <>
       <div>
        <h2>Shopping List</h2>
        <button>Reset</button>
        <button onClick={clearAllItems}>Clear</button>
       </div>
       <div id="listBox">
    
        {list.map(item => (
         <>
          <ul id="itemsInBox"key={item.id}>
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.unit}</li>

            { item.purchased ? 
             <p>Purchased</p> :
            <li id="buy">
            <button default={true} onClick={() => buyBtn(item.id)}>Buy</button>
            <button>Remove</button>
            </li> 
            }  
      

            </ul>
        </>
       
        ))}
       </div>
       </> 
    )
}

export default GetShoppingList;