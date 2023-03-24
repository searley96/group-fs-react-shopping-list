function BuyButton({buy}){
    console.log('inside buyBtnToggle()')

    const [toggle, setToggle] = useState(true);


    function buyBtnToggle(){
        setToggle(!toggle);
    }
    //if you hit button
    //see text "purchased"

    
    return(<>
            { toggle ? 
            <div id="buy">
            <button onClick={buyBtnToggle}>Buy</button>
            <button>Remove</button>
            </div> : <di>Purchased</di>
            }  
            </>)

    }
