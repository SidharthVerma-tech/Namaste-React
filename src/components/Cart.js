import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart, removeItems } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-4 p-4 font-bold text-xl flex-col">
            CART
            <div>
            <button 
            className="m-2 p-1 rounded-md bg-black text-white"
            onClick={handleCart}>Clear Cart</button>
            {cartItems.length === 0 && (
                <h1>Cart is Empty Wanna add some Items !!</h1>
            )}
            </div>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
            
        </div>
    )
}
export default Cart