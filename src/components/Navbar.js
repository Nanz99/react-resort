import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { MdAccountCircle } from 'react-icons/md'
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
export default function Navbar() {
   const {
      isAuthenticated,
      loginWithRedirect,
      logout,
      user,

   } = useAuth0();
   const isUser = isAuthenticated && user;
   return (
      <nav className="navbar">
         <div className="nav-center">
            <div className="nav-header">
               <Link to="/"><img src={logo} alt="" /></Link>
               <button type="button" className="nav-btn">
                  <FaBars />
               </button>
            </div>

            <ul className="nav-links">
               <li>
                  <Link to="/">Home</Link>
               </li>
               {/* <li>
                  <Link to="/about">About</Link>
               </li> */}
               <li>
                  <Link to="/rooms">Rooms</Link>
               </li>
            </ul>

            <Wrapper>
               {isUser && user.picture && <img src={user.picture} alt={user.name} />}
               {isUser && user.name && (
                  <h5>
                     Welcome, <strong>{user.name.toUpperCase()}</strong>
                  </h5>
               )}
               {isUser ? (
                  <button className="btn-logout"
                     onClick={() => {
                        logout({ returnTo: window.location.origin });
                     }}
                  >
                     logout <FiLogOut style={{marginLeft:"5px"}}/>
                  </button>
               ) : (
                  <button
                     className="btn-login"
                     onClick={loginWithRedirect}>login <MdAccountCircle style={{marginLeft:"5px"}}/></button>
               )}
            </Wrapper>
         </div>
      </nav>
   )
}



const Wrapper = styled.nav`
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h5 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 30px !important;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;
