import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-white text-lg font-medium mb-2">Contacto</h3>
            <p className="text-gray-400 text-sm">Correo: nome@funciona.com</p>
            <p className="text-gray-400 text-sm">Teléfono: 123456789</p>
            <Link to="/contacto" className="text-gray-400 text-sm mt-2 underline">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;