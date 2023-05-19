import React from 'react'
import InputComponent from './InputComponent'

const Rendericer = ({text  }) => {
  return (
   <>
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-black to-bg-zinc-200 p-2 rounded-s m-2">Buscador de zapatillas</h1>
      <div className="pumba-container mx-auto flex flex-col justify-center items-center">
      <InputComponent
        ifExists={false}
        id="0M0x1"
        color="from-sky-600 to-indigo-600"
        shadow="shadow-lg shadow-blue-500"
        title=''
        text={text}
        img=""
        btn=""
        rating=""
        price=""
        
      />
    </div>
   </>
  )
}

export default Rendericer