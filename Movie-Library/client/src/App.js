import Navbar from './Components/NavBar';
import Main from './Components/HomePage/Main';
import { Route, Switch, Redirect } from 'react-router-dom';
import Search from './Components/SearchPage/Search'
import MoviePage from './Components/MoviePage/MoviePage';
import TvPage from './Components/TvPage/TvPage';
import Register from './Components/RegisterPage/Register';
import Login from './Components/LoginPage/Login';
import Favorite from './Components/Favorite/Favorite'; 
import './utils/firebase';
import { auth } from './utils/firebase'
import { useEffect, useState } from 'react';
import Watchlist from './Components/WatchList/Watchlist';

function App() {
  const [ user, setUser ] = useState(null)


  //On every Loggin settheuser so we can save some data
  useEffect(()=>{
    auth.onAuthStateChanged(setUser);
  },[]);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <div className="container">
      <Navbar {...authInfo}/>  
      <Switch>
        <Route exact path="/" render={props => <Main {...props} {...authInfo} />} />
        <Route path="/search" render={props => <Search {...props} {...authInfo}/>} />
        <Route exact path="/movie/details/:id" render={props => <MoviePage {...props} {...authInfo}/>} />
        <Route exact path="/tv/details/:id" render={props => <TvPage {...props} {...authInfo}/>} />
        <Route exact path="/favorites" render={props => <Favorite {...props} {...authInfo}/>} />
        <Route exact path="/watchlist" render={props => <Watchlist {...props} {...authInfo}/>} />
        <Route exact path="/register" render={props => <Register {...props} {...authInfo}/>} />
        <Route exact path="/login" render={props => <Login {...props} {...authInfo}/>} />
        <Route exact path="/logout" render={props => {
            auth.signOut()
            return <Redirect to="/" />
          }} />
      </Switch>
    </div>
      
  );

}

export default App;
