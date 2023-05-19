import React from 'react'
import InputComponent from './InputComponent'

const Render = ({ popularsales: {title, text, btn, img, rating, price, id} }) => {
 



    return (
      <>
        

        <div className="pumba-container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hero Section</h1>
      <InputComponent
        ifExists={false}
        id={id}
        color="from-sky-600 to-indigo-600"
        shadow="shadow-lg shadow-blue-500"
        title={title}
        text={text}
        img={img}
        btn={btn}
        rating={rating}
        price={price}
      />
    </div>
    </>
  )
}

export default Render