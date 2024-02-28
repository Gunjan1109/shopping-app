import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={` ${isNavOpen && 'nav-open' }`}>
      <div className="flex justify-between items-end tracking-wide text-base tb:text-xsmall md:w-s6 xxxl:w-s5 mx-auto px-s7 pt-s9 pb-s8 font-medium">
        <Link to="/ecommerce-react-app/" className="">
          Home
        </Link>

        <div className="desktop-view">
          <HashLink to="/ecommerce-react-app/#about" className="mx-s11">About</HashLink>
          <HashLink to="/ecommerce-react-app/#category" className="mx-s11">Category</HashLink>
          <HashLink to="/ecommerce-react-app/#products" className="mx-s11">Products</HashLink>
        </div>
        <Link to="/ecommerce-react-app/cart" className="desktop-view">
          Cart
        </Link>



        {isNavOpen === true ? (
          <>
            <div className="mobile-view flex flex-col w-full absolute top-0 left-0 py-s16 px-s7 h-screen bg-white">
              <HashLink to="/ecommerce-react-app/#about"  className="pb-1 mb-1 border-b-2 border-transparent hover:border-dark" onClick={() => setIsNavOpen(false)}>About</HashLink>
              <HashLink to="/ecommerce-react-app/#category" className="pb-1 mb-1 border-b-2 border-transparent hover:border-dark" onClick={() => setIsNavOpen(false)}>Category</HashLink>
              <HashLink to="/ecommerce-react-app/#products" className="pb-1 mb-1 border-b-2 border-transparent hover:border-dark" onClick={() => setIsNavOpen(false)}>Products</HashLink>
              <Link to="/ecommerce-react-app/cart" className="pb-1 mb-1 border-b-2 border-transparent hover:border-dark" onClick={() => setIsNavOpen(false)}>
                Cart
              </Link>
            </div>
            <button className="mobile-view absolute right-s7">
              <CloseIcon onClick={() => setIsNavOpen(!isNavOpen)} />
            </button>
          </>
        ) : (
          <div className="mobile-view">
            <button>
              <MenuIcon onClick={() => setIsNavOpen(!isNavOpen)} />
            </button>
          </div>
        )
        }
      </div>
    </div>
  );
};

export default Navbar;
