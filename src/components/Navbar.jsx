import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";


const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header className={
        !navState ? ' top-7 left-0 right-0 opacity-100 z-50 bg-slate-950' : 'fixed top-0 left-0 right-0 h-[12vh]  items-center justify-center opacity-100 z-[200] blur-effect-theme  '
        
      }>
        <nav className="flex items-center justify-between pumba-container ">
          <div className="flex items-center">
            <img src={logo} alt="logo/img" className={`w-14 ${navState}`} />
          </div>
              
          <ul className="flex items-center justify-center gap-3  ">
            <li className="flex items-center ">
            {/* <Input/> */}
      <div>
      </div>
            </li>
            
            <li className="grid items-center ">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-100 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={` icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                    
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 bg-white text-slate-900 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300  ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
