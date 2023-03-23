import { useState, useEffect } from 'react';

const [toggle, setToggle] = useState(true);

function GetShoppingList({list}) {
    console.log('in GetShoppingList', list)

    function buyBtnToggle(){
        console.log('inside buyBtnToggle()')
        //if you hit button
        //see text "purchased"
        setToggle(!toggle);

        if(toggle){
            return
            <div>
                <p>Purchased!</p>
            </div>
        }
        
    }

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
            <div id="buy">
            <button onClick={buyBtnToggle}>Buy</button>
            <button>Remove</button>
            </div>
            </ul>
        </>
       
        ))}
       </div>
       </> 
    )
}

export default GetShoppingList;