import Navbar from './Components/NavBar';
import Main from './Components/HomePage/Main';
import { Route, Switch } from 'react-router-dom';
import Search from './Components/SearchPage/Search'

function App() {

  return (
    <>
      <Navbar />
      <Switch>
         <Route exact path="/" component={Main} />
         <Route exact path="/search" component={Search} />
      </Switch>
    </>
  );

}

export default App;
