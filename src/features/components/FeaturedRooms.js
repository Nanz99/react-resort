import React from 'react'
import Loading from '../../components/Loading'
import Title from '../../components/Title'
import { useGlobalContext } from '../../context/roomsContext'
import Room from './Room'

export default function FeaturedRooms() {
   const {loading,featuredRooms} = useGlobalContext()
 
   return (
     <section className="featured-rooms">
        <Title title="Feature Rooms"/>
        <div className="featured-rooms-center">
           {loading ? <Loading/> :
           (
              featuredRooms.map((item,index)=>{
                 return <Room key={index} {...item}/>
              }))
           }
        </div>
     </section>
   )
}
