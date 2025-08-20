import { useAuth } from '../../AuthContext'
import ProductsTab from '../Home/Popular/ProductsTab'
import './CategoriesPage.css'
import CategoryTab from './CategoryTab'


function CategoriesPage(){
 

    const {currentCategory , products } = useAuth()

    return(
        <div className='categories_cover'>
            <div className='categories_top_head'>
                <h2>{currentCategory}</h2>
                <div className='cat_sort'>
                  
                </div>
            </div>
            <div className='category_content'>
  {products.map((el,i)=>{
                        return <ProductsTab item={el} popular={false} key={i}/>
                    })}
            </div>
        </div>
    )


}

export default CategoriesPage