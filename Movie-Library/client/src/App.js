import Navbar from './Components/NavBar';
import Main from './Components/HomePage/Main';
import { Route, Switch, Redirect } from 'react-router-dom';
import Search from './Components/SearchPage/Search'
import MoviePage from './Components/MoviePage/MoviePage';
import TvPage from './Components/TvPage/TvPage';
import Register from './Components/RegisterPage/Register';
import Login from './Components/LoginPage/Login';
import './utils/firebase';
import { auth } from './utils/firebase'
import { useEffect, useState } from 'react';

function App() {
  const [ user, setUser ] = useState(null)


  //On every Loggin settheuser so we can save some data
  useEffect(()=>{
    auth.onAuthStateChanged(setUser);
  },[]);

  return (
    <div className="container">
      <Navbar email={user?.email}  isAuthenticated={Boolean(user)}/>  
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Route exact path="/movie/details/:id" component={MoviePage} />
        <Route exact path="/tv/details/:id" component={TvPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" render={props => {
          auth.signOut()
          return <Redirect to="/" />
        }} />
      </Switch>
      <h5>{user?.email}</h5>
    </div>
      
  );

}

export default App;
