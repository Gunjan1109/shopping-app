import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopContext } from "../../context/shopcontext";
import { HashLink } from "react-router-hash-link";

const Product = ({ data }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  return (
    <div className="p-4 shadow-3xl">
      <img src={data.productImage} className="mb-2" alt=""/>

      <div>
        <p className="flex justify-between text-base xl:text-xl font-semibold">
          <span>{data.productName}</span>
          <span><span className="font-serif">₹</span> {data.price}</span>
        </p>
        <p className="mb-s7 primary-text md:tracking-wider xl:mb-2">
          {data.desc}
        </p>

        {cartItems[data.id] > 0 ? (
          <div className="flex justify-between items-center">
            <div className="primary-btn flex justify-between card-button">
              <button onClick={() => removeFromCart(data.id)}>-</button>
              <p>{cartItems[data.id]}</p>
              <button onClick={() => addToCart(data.id)}>+</button>
            </div>
            <HashLink to="/ecommerce-react-app/cart" className="shadow-3xl p-1 leading-none text-light-100 hover:bg-light-100 hover:text-white">
              <ShoppingCartIcon />
            </HashLink>
          </div>
        ) : (
            <button
              className="primary-btn card-button"
              onClick={() => addToCart(data.id)}
            >
              Add to cart
            </button>
        )}
      </div>
    </div>
  );
};

export default Product;
