import { useState, useEffect } from 'react';

function GetShoppingList({list}) {
    console.log('in GetShoppingList', list)

    function buyBtnToggle(){
        console.log('inside buyBtnToggle()')
        
    }

    return (
       <>
       <div>
        <h2>Shopping List</h2>
        <button>Reset</button>
        <button>Clear</button>
       </div>
       <div>
       <ul>
        {list.map(item => (
         <>
            <li key={item.id}>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.unit}</li>
            <button onClick={buyBtnToggle}>Buy</button>
            <button>Remove</button>
        </>
       
        ))}
        </ul>
       </div>
       </> 
    )
}

export default GetShoppingList;