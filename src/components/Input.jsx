import React, { useState } from 'react';


const Input = () => {
  const [searchTerm, setSearchTerm] = useState('');

  

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Lógica de búsqueda de productos usando el término de búsqueda (searchTerm)
    console.log('Realizar búsqueda:', searchTerm);
  };

  return (
    <div className='flex items-center justify-center gap-2'>
      <input
        type="text"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={handleInputChange}
        className='mt-5 mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-blue-100'
      />
      <button className='button-theme bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleSearch}>Buscar</button>
    </div>
  );
};





export default Input;

