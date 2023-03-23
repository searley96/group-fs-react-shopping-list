function ShoppingListForm({addItemToList}){
    console.log('Inside ShoppingListForm()')

    const [newListItem, setNewShopingList] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newUnit, setNewUnit] =useState('')

    const handleSave = (event) => {
        event.preventDefault();

        const newShopList ={
            name: newListItem,
            quantity: newQuantity,
            unit: newUnit
        }

        addItemToList(newShopList);

    }

    return(<>
    <h2>Add an Item</h2>
    <form onSubmit={handleSave}>
        <lable>
        Item: 
        </lable>
        <input type='text' value={newListItem} onChange={(event) => setNewShopingList(event.target.value)}/>
        
        <lable>
        Quantity:
        </lable> 
        <input type='number' value={newQuantity} onChange={(event) => setNewQuantity(event.target.value)}/>

        <label>
        Unit: 
        </label>
        <input type='text' value={newUnit} onChange={(event) => setNewUnit(event.target.value)}/>
        

        <button type="submit">Save</button>
    </form>
    </> 
    )
}

export default ShoppingListForm;