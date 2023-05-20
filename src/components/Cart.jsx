import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../app/CartSlice.js";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    
    dispatch(setClearCartItems());
  };

  const handleBuyButton = () => {
    
    setShowPurchaseModal(true);
  };

  const handleCancelBuy = () => {
    setShowPurchaseModal(false);
  };

  const handleConfirmBuy = () => {
    setShowSuccessModal(false);

    dispatch(setClearCartItems());
    dispatch(setCloseCart({ cartState: false }));
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}
        >
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${totalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Desea realizar su compra?
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                    onClick={handleBuyButton}
                  >
                    Comprar
                  </button>
                </div>
              </div>

              {showPurchaseModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white w-80 p-6 rounded-lg shadow-md">
                    <p className="text-lg font-semibold text-center">
                      Confirmar compra
                    </p>
                    <p className="mt-4 mb-8 text-sm">
                      ¿Estás seguro de que deseas realizar la compra?
                    </p>
                    <div className="flex justify-center">
                      <button
                        className="button-theme bg-theme-cart text-white mr-4"
                        onClick={handleConfirmBuy}
                      >
                        Comprar
                      </button>
                      <button
                        className="button-theme bg-gray-300 text-white"
                        onClick={handleCancelBuy}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white w-80 p-6 rounded-lg shadow-md">
                    <p className="text-lg font-semibold text-center">
                      Compra realizada con éxito
                    </p>
                    <div className="flex justify-center mt-6">
                      <button
                        className="button-theme bg-theme-cart text-white"
                        onClick={handleModalClose}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;