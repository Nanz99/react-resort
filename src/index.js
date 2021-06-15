import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RoomsProvider } from './context/roomsContext';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <Auth0Provider
    domain='maxtrix.us.auth0.com'
    clientId='dfSvNoIr12lIRmYhShGWaz7oHfxFy72i'
    redirectUri={window.location.origin}
  >
    <RoomsProvider>
      <App />
    </RoomsProvider>
  </Auth0Provider>
  ,
  document.getElementById('root')
);

