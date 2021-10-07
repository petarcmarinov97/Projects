import Navbar from './Components/NavBar';
import Main from './Components/HomePage/Main';
import { Route, Switch } from 'react-router-dom';
import Search from './Components/SearchPage/Search'
import MoviePage from './Components/MoviePage/MoviePage';
import TvPage from './Components/TvPage/TvPage';

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/movie/details/:id" component={MoviePage} />
        <Route exact path="/tv/details/:id" component={TvPage} />
      </Switch>
    </>
  );

}

export default App;
