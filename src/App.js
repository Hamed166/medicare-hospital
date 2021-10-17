
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Pages/Header/Header/Header';
import Footer from './Pages/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route eaxct path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
