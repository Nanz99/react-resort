import React from 'react'
import defaultBcg from '../../assets/images/room-1.jpeg';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/roomsContext';
import Banner from '../../components/Banner';
import StyledHero from '../components/StyledHero';

export default function SingleRoomPage() {
   const { id } = useParams()
   const { getOneRoom } = useGlobalContext()
   const room = getOneRoom(id)

   if (!room) {
      return <div className="error">
         <h3>room could be found...</h3>
         <Link to='/rooms' className="btn-primary">Back to room</Link>
      </div>
   }

   const { name, description, capacity, size, price, extras, breakfast, pets, images } = room

   return (
      <div>
         <StyledHero img={images[0] || defaultBcg}>
            <Banner title={`${name} room`}>
               <Link to="/rooms" className="btn-primary">back to rooms</Link>
            </Banner>
         </StyledHero>
         <section className="single-room">
            <div className="single-room-images">
               {images.map((item, index) => {
                  return <img key={index} src={item} alt={name} />
               })}
            </div>
            <div className="single-room-info">
               <article className="desc">
                  <h3>details</h3>
                  <p>{description}</p>
               </article>
               <article className="info">
                  <h3>info</h3>
                  <h6 >price : ${price}</h6>
                  <h6 >size : ${size} SQFT</h6>
                  <h6>max capacity : {""}
                     {capacity > 1 ? `${capacity} people` : `${capacity} person`
                     }</h6>
                  <h6>{pets ? "pets allowed" : "no pets allowes"}</h6>
                  <h6>{breakfast && "free breakfast include"}</h6>
               </article>
            </div>
         </section>
         <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
               {
                  extras.map((item, index) => {
                     return <li key={index}>-{item}</li>
                  })
               }
            </ul>
         </section>
      </div>
   )
}