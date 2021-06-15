import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './features/pages/HomePage'
import RoomsPage from './features/pages/RoomsPage';
import SingleRoomPage from './features/pages/SingleRoomPage';
import ErrorPage from './features/pages/ErrorPage';
import LoginPage from './features/pages/LoginPage';
import PrivateRoute from './features/pages/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginPage}/>
        <PrivateRoute exact={true} path="/" component={HomePage}/>
        <Route exact path="/rooms" component={RoomsPage} />
        <Route path="/rooms/:id" component={SingleRoomPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
