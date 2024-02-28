import React, { useContext } from "react";
import PRODUCTS from "../../products";
import Product from "../../components/Product/Product";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { ShopContext } from "../../context/shopcontext";
import CartItem from "../../components/CartItem/CartItem";
import { HashLink } from "react-router-hash-link";

const Cart = () => {
  const { cartItems, getTotalAmount, resetCart } = useContext(ShopContext);

  const totalAmount = getTotalAmount();

  return (
    <>
      <div className="flex flex-col tb:flex-row container-large gap-4 md:gap-6 ">
        {totalAmount > 0 ? (
          <>
            <div className="tb:flex-1.5 px-3">
              <div className={`${totalAmount > 0 ? "block" : "hidden"}`}>
                {PRODUCTS.map((product) => {
                  if (cartItems[product.id] > 0) {
                    return <CartItem key={product.id} data={product} />;
                  }
                })}
                
                <button
                  className="primary-btn card-button "
                  onClick={() => resetCart()}
                >
                  Reset Cart
                </button>
              </div>
            </div>

            <div className="tb:flex-1 mx-3 tb:m-0">
              <div className="p-3 shadow-3xl rounded-md h-max">
                <table className="table-auto w-full primary-text">
                  <tbody>
                    <tr>
                      <td>Sub Total</td>
                      <td className="flex justify-end">
                        <span className="font-serif">₹</span> {totalAmount}
                      </td>
                    </tr>
                    <tr>
                      <td>Delivery Fee</td>
                      <td className="flex justify-end">
                        <span className="font-serif">₹</span> 50
                      </td>
                    </tr>
                    <tr className="font-medium">
                      <td>Total Amt</td>
                      <td className="flex justify-end">
                        <span className="font-serif">₹</span> {totalAmount + 50}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex flex-col smaller:flex-row tb:flex-col xl:flex-row justify-center gap-4 mt-2 ">
                  <button className="p-2 border border-dark-100 xs:flex-2 hover:bg-dark-100 hover:text-white">
                    <HashLink
                      to="/ecommerce-react-app/#products"
                      className="tracking-wider"
                    >
                      <ArrowCircleLeftIcon className="mr-3" />
                      Continue Shopping
                    </HashLink>
                  </button>

                  <button className="p-2 border border-dark-100 xs:flex-1 tracking-wider hover:bg-light-100 hover:text-white">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="p-4 w-full text-center">
            <p className="primary-heading mb-4 text-light-100">
              Cart is empty !
            </p>

            <button className="p-2 border border-dark-100 text-light-100 hover:bg-light-100 hover:text-white">
              <HashLink
                to="/ecommerce-react-app/#products"
                className="tracking-wider"
              >
                <ArrowCircleLeftIcon className="mr-2" />
                Start Shopping
              </HashLink>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
