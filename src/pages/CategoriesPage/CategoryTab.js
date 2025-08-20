
function CategoryTab({item}){

    return(
        <div className="category_tab_cover">
            <div className="cat_product_img">
                <img src={item.img} />
            </div>
            <div className="cat_product_details">
                <div className="prod_name">{item.name}</div>
                <div className="prod_price"><span className="old">{item.old_price}</span>
                <span>{item.new_price}</span></div>
                <div className="prod_desc">
                    <p>{item.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryTab