import React from 'react';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const Item = ({ 
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price }) => {
    console.log(id)
  return (
    <>
      <div className=''>
        <div className=''>
          <h1 className=''>{title}</h1>
          <p className=''>{text}</p>
        <div className=''>
               <div className=''><h1 className=''>{price}</h1></div>
              <div className=''><StarIcon className='icon-style text=slate-900'/><h1 className=''>{rating}</h1></div>
        </div>

        <div className=''>
          <button type='button' className=''><ShoppingBagIcon className='icon-style text-slate-900'/></button>
          <button type='button' className=''>{btn}</button>
        </div>
      </div>

      <div>
        <img src={img} alt="img/item-img" className=''/>
      </div>

      </div>
    </>
  )
}

export default Item