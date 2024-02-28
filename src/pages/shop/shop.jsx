import React, { useState } from "react";
import PRODUCTS from "../../products";
import Product from "../../components/Product/Product";
import Banner from "../../components/Banner/Banner";
import aboutimg from "../../assets/banner/about.jpg";
import { HashLink } from "react-router-hash-link";

const Shop = () => {
  const [category, setCategory] = useState("type1");

  const handleCategoryButton = (e) => {
    setCategory(e.target.id);

    const buttons = document.querySelectorAll(".category-button");
    const currentBtn = document.getElementById(e.target.id);

    buttons.forEach((ele) => {
      ele.classList.remove("selectedBtn");
    });

    currentBtn.classList.add("selectedBtn");
  };

  const handleCategoryCards = (id) => {
    document.getElementById(id).click();
  };

  return (
    <>
      <Banner />

      <div className="container-large">
        <div
          className="flex flex-col tb:flex-row gap-5 tb:gap-7 pt-10"
          id="about"
        >
          <div className="flex flex-col justify-center tb:flex-1 gap-s7 tb:py-5 xl:py-s9">
            <div>
              <h3 className="primary-subheading text-cyan">ABOUT US</h3>
              <h1 className="primary-heading">
                We provide high quality Headphones
              </h1>
            </div>
            <p className="primary-text xl:mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="primary-btn">
              <HashLink to="/ecommerce-react-app/#category">Explore More</HashLink>
            </button>
          </div>

          <img
            className="w-full h-s18 object-cover tb:flex-1 tb:w-2/4 tb:h-unset"
            src={aboutimg}
          />
        </div>

        <div id="category">
          <h1 className="primary-heading text-center py-8">
            Explore Categories
          </h1>

          <div className="bg-[url('/src/assets/banner/card3.png')] bg-cover mb-5 bg-pos-1 h-s18 rounded-lg tb:h-s19 tb:rounded-2xl overflow-hidden">
            <h1 className="primary-heading h-full flex flex-col justify-center items-center cursor-pointer text-white bg-dark-100 hover:bg-dark-200">
              <HashLink
                to="/ecommerce-react-app/#products"
                onClick={() => {
                  handleCategoryCards("type1");
                }}
              >
                SmartWatch
              </HashLink>
            </h1>
          </div>

          <div className="flex flex-col tb:flex-row gap-5">
            <div className="bg-[url('/src/assets/banner/card1.jpg')] bg-cover mb-5 bg-pos-2 tb:flex-1 h-s18 rounded-lg tb:h-s19 tb:rounded-2xl overflow-hidden">
              <h1 className="primary-heading h-full flex flex-col justify-center items-center cursor-pointer text-white bg-dark-100 hover:bg-dark-200">
                <HashLink
                  to="/ecommerce-react-app/#products"
                  onClick={() => {
                    handleCategoryCards("type2");
                  }}
                >
                  Earbuds
                </HashLink>
              </h1>
            </div>

            <div className="bg-[url('/src/assets/banner/card2.jpg')] bg-cover mb-5 bg-pos-2 tb:flex-1 h-s18 rounded-lg tb:h-s19 tb:rounded-2xl overflow-hidden">
              <h1 className="primary-heading h-full flex flex-col justify-center items-center cursor-pointer text-white bg-dark-100 hover:bg-dark-200">
                <HashLink
                  to="/ecommerce-react-app/#products"
                  onClick={() => {
                    handleCategoryCards("type3");
                  }}
                >
                  Headphones
                </HashLink>
              </h1>
            </div>
          </div>
        </div>

        <div id="products">
          <h1 className="primary-heading text-center py-8">Explore Products</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 tb:grid-cols-4 gap-3 lg:flex lg:gap-6 mb-8">
            <button
              className="category-button selectedBtn"
              id="type1"
              onClick={handleCategoryButton}
            >
              SmartWatch
            </button>

            <button
              className="category-button"
              id="type2"
              onClick={handleCategoryButton}
            >
              Earbuds
            </button>

            <button
              className="category-button"
              id="type3"
              onClick={handleCategoryButton}
            >
              Headphone
            </button>

            <button
              className="category-button"
              id="type4"
              onClick={handleCategoryButton}
            >
              Accessories
            </button>
          </div>

          <div className="grid grid-cols xs:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 mx-0 my-s11 gap-4">
            {PRODUCTS.map((product) => {
              if (product.category === category) {
                return <Product key={product.id} data={product} />;
              }
            })}
          </div>
        </div>
      </div>

    </>
  );
};

export default Shop;
