import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Hero from '../../components/Hero'
// import Navbar from '../../components/Navbar';
import Contact from '../components/Contact'
import FeaturedRooms from '../components/FeaturedRooms'
import Services from '../components/Services'
// import Footer from '../../components/Footer';
export default function HomePage() {
   return (
      <main>
        
         <Hero hero="defaultHero">
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
               <Link to="/rooms" className="btn-primary" >Our Rooms</Link>
            </Banner>
         </Hero>
         <Services />
         <FeaturedRooms/>
         <Contact/>
       
      </main>
   )

}
