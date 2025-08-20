import { useAuth } from "../../AuthContext"
import Button from "../../components/Button/Button";
import './ProductPage.css'

function ProductPage(){
    const {currentProduct} =useAuth()
console.log(currentProduct);

function addCartHandle(){

}

    return(
        <div className="productDetails_cover">
            <div className="productDetails_top">
                <h2>{currentProduct.name}</h2>
            </div>
            <div className="productDetails_content">
                <div className="productDetails_img">
                    <img src={currentProduct.img} alt="product_detail_img" />
                </div>
                <div className="productDetails_details">
                    <h4>{currentProduct.name}</h4>
                    <p>{currentProduct.desc}</p>
                    <div className="item_price">
                        <span>{currentProduct.old_price}</span> {currentProduct.new_price}
                    </div>
                    <div className="add_to_cart_sec">
                        <Button onClick={addCartHandle}>Add to cart</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductPage