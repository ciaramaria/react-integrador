import React from 'react';

const Input = () => {
  return (
    <div className="w-50 ">
      
      <input className="w-full px-4 py-1 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500" type="text" id="nombre" name="nombre" placeholder="Busca lo que" />
    </div>
  );
};

export default Input;

