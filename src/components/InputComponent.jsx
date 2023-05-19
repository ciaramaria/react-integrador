import React, { useState } from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../app/CartSlice.js";

const InputComponent = ({id,color, text, shadow,btn,img,price,rating }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToCart = () => {
    dispatch(setAddItemToCart(inputValue));
    setInputValue("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Busca acá"
        className="border border-gray-300 rounded-md p-2 mb-4 px-4 py-2 rounded-md border border-black-300 hover:bg-blue-200"
      />

      {inputValue && (
        <div
          className={`relative bg-gradient-to-b ${color} ${shadow} transition-all duration-700 ease-in-out w-120 hover:scale-105 h-96 w-64`}
        >
          <div className="grid items-center justify-items-center mt-10">
            <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
              {inputValue}
            </h1>

            <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
              {text}
            </p>

            <div className="flex items-center justify-between w-28 my-2">
              <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
                <h1 className="text-black text-sm font-medium">${price}</h1>
              </div>
              <div className="flex items-center gap-1">
                <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
                <h1 className="md:text-sm font-normal text-slate-100">
                  {rating}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
                onClick={handleAddToCart}
              >
                <ShoppingBagIcon className="icon-style text-slate-900" />
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                onClick={handleAddToCart}
              >
                {btn}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center h-20 w-50 mt-16 object-cover">
            <img
              src={img}
              alt={`img/item-img/${id}`}
              className="max-w-xs object-cover mt-20 drop-shadow-xl w-64"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InputComponent;