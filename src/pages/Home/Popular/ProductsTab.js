
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';
import Button from '../../../components/Button/Button'
function ProductsTab({item,popular}){
    const {setCurrentProduct} = useAuth()

const navigate = useNavigate()

function productClickHandle(item){
setCurrentProduct(item)
navigate('/productdetails')
}

    return(
         <div className="Productstab_cover" onClick={()=>productClickHandle(item)}>
            <div className="prod_img">
                <img src={item.img} alt="product_img" />
            </div>
            <div className="prod_details">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <h4> <span>{item.old_price}</span> {item.new_price}</h4>
              
            </div>
              <Button>Add to cart</Button>
         </div>
    )
}

export default ProductsTab