import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Hero from '../../components/Hero'
import { useGlobalContext } from '../../context/roomsContext'
import RoomFilter from '../components/RoomFilter'
import RoomList from '../components/RoomList'

export default function RoomsPage() {
   const { rooms, sortRooms } = useGlobalContext()
      return (
      <>
         <Hero hero="roomsHero">
            <Banner title="our rooms" >
               <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
         </Hero>
         <RoomFilter rooms={rooms}/>
         <RoomList rooms={sortRooms}/>
      </>
   )
}


