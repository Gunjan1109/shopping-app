import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";

const CartItem = ({ data }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  return (
      <div className="flex items-center py-2 mb-2 border-2 rounded-md">

        <div className="flex-1 flex items-center smaller:gap-4 ">
          <img src={data.productImage} className="w-2/5" alt=""/>

          <div className="text-left grow">
            <h3 className="font-semibold">{data.productName}</h3>
            <p className="text-slate-700 text-base xs:hidden">
              <span className="font-serif">₹</span> {data.price}
            </p>
            <p className="text-slate-700 text-base hidden xs:inline-block">
              <span className="font-medium tracking-wider">
                <span className="font-serif">₹</span>{" "}
                {data.price * cartItems[data.id]}
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col xs:flex-row justify-around items-center">

          <div className="flex justify-between w-max tb:w-24 gap-4 border-2 rounded-md px-2">
            <button onClick={() => removeFromCart(data.id)}>-</button>
            <p>{cartItems[data.id]}</p>
            <button onClick={() => addToCart(data.id)}>+</button>
          </div>

          <span className="font-medium tracking-wider">
            <span className="font-serif">₹</span>{" "}
            {data.price * cartItems[data.id]}
          </span>
        </div>
      </div>
  );
};

export default CartItem;
