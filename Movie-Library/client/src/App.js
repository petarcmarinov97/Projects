import Navbar from './Components/NavBar';
import Main from './Components/HomePage/Main';
import { Route, Switch } from 'react-router-dom';
import Search from './Components/SearchPage/Search'
import MoviePage from './Components/MoviePage/MoviePage';
import TvPage from './Components/TvPage/TvPage';
import Register from './Components/RegisterPage/Register';
import Login from './Components/LoginPage/Login';

function App() {

  return (
    <>
      <Navbar />  
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Route exact path="/movie/details/:id" component={MoviePage} />
        <Route exact path="/tv/details/:id" component={TvPage} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/login" component={Login} />
      </Switch>
    </>
  );

}

export default App;
