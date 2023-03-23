import { useState, useEffect } from 'react';

function GetShoppingList({list}) {
    console.log('in GetShoppingList', list)

    return (
       <>
       <div>
        <h2>Shopping List</h2>
        <button>Reset</button>
        <button>Clear</button>
       </div>
       <div>
    
        {list.map(item => (
         <>
          <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.unit}</li>
            <button>Buy</button>
            <button>Remove</button>
            </ul>
        </>
       
        ))}
       </div>
       </> 
    )
}

export default GetShoppingList;