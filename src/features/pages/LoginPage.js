import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import loginImg from '../../assets/images/login-img.svg'
import styled from 'styled-components'

export default function LoginPage() {
   const { loginWithRedirect } = useAuth0()
   return (
      <Wrapper>
         <div className="container">
            <img src={loginImg} alt="" />
            <h1>Login user</h1>
            <button className='btn-login' onClick={loginWithRedirect}>
               Log In / Sign Up
            </button>
         </div>
      </Wrapper>
   )
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    display:block;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
