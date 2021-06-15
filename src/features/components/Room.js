import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from "../../assets/images/room-1.jpeg"
export default function Room({ id, name, images, price }) {
   return (
      <article className="room">
         <div className="img-container">
            <img src={images[0] || defaultImg} alt={name} />
            <div className="price-top">
               <h6>${price}</h6>
               <p>per night</p>
            </div>
            <Link to={`/rooms/${id}`} className="btn-primary room-link">
               features
            </Link>
         </div>
         <p className="room-info">{name}</p>
      </article>
   )
}
