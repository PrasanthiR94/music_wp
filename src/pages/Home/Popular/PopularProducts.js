import './PopularProducts.css'
import ProductsTab from './ProductsTab'
import './PopularProducts.css'
import products from '../../../ProductList'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function PopularProducts(){ 
const popProducts = products[1].products
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 4,    // default for desktop
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,  // screen width ≤ 768px
        settings: {
          slidesToShow: 1,   // show 1 slide on mobile
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
    return (
       <div className='products_cover'>
        <h2>Popular Products</h2>
        <div className='products_inner_cover'>
             <Slider {...settings}>
     {popProducts.map((el,i)=>{
                   return   <ProductsTab popular={true} item={el} key={i}/>
            })}
    </Slider>
           
        </div>
       </div>
    )
}

export default PopularProducts