import React, { useState } from 'react'
import "../item/item.css"
import data from "../../helper/data.js"

console.log(data)
const Item = () => {
  const [showText, setShowText] = useState()

  return (
    <div className='city-container'>
        <h1>Popular Tour Places in Turkey</h1>
        <div className='cities' onTouchMove={() => {setShowText(!showText)}}>
            {data.map((item) => {
              const {img, name, id} =item

              return <div key={id} className='items'>
                <h3>{name}</h3>
                <img src={img} alt="" />
               </div>
               
            })}
        </div>

    </div>
  )
}

export default Item