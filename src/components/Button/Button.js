import { useAuth } from '../../AuthContext'
import './Button.css'
function Button(props){
    const {itemCount,setItemCount} = useAuth()

 function addtoCartHandle(){
setItemCount(itemCount+1)
    }
    const increment = () => setItemCount((prev) => prev + 1);
  const decrement = () => setItemCount((prev) => (prev > 0 ? prev - 1 : 0));

    return   ( <>{itemCount === 0 ? <button onClick={addtoCartHandle} className="common_btn">Add to cart</button> :
        <button className="common_btn"><span onClick={decrement}>-</span >{itemCount}<span onClick={increment}>+</span></button>  } </> )
    
}

export default Button