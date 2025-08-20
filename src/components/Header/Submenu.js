import CategoryIcon from "@mui/icons-material/Category";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
 import products from '../../ProductList'

function Submenu() { 
  const { setCurrentCategory, setProducts } = useAuth();
  const navigate = useNavigate();
  function categoryHandle(item) {
    setCurrentCategory(item.category);
    setProducts(item.products);
    navigate("/categories");
  }
  const [submenuOpen, setSubmenuOpen] = useState(false);
  return (
    <div className="login_wrap">
      <div className="icon_tab" onMouseEnter={() => setSubmenuOpen(true)}>
        <CategoryIcon /> <p>Shop</p>
      </div>
      {submenuOpen ? (
        <div
          className="submenu_menu"
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          <ul>
            {products.map((el,i) => {
              return <li onClick={() => categoryHandle(el)} key={i}>{el.category}</li>;
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Submenu;
