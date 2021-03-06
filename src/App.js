
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Pages/Header/Header/Header';
import Footer from './Pages/Footer/Footer';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Contact from './Pages/Contact/Contact';
import Doctors from './Pages/Home/Doctors/Doctors';
import Blog from './Pages/Blog/Blog';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        
        <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/about">
                <About></About>
              </Route>
              <Route exact path="/doctors">
                <Doctors></Doctors>
              </Route>
              <PrivateRoute exact path="/services">
                <Services></Services>
              </PrivateRoute>
              <PrivateRoute path="/serviceinfo/:serviceId">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <Route exact path="/blog">
                <Blog></Blog>
              </Route>
              <Route exact path="/contact">
                <Contact></Contact>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <PageNotFound></PageNotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      
      </AuthProvider>
      
    </div>
  );
}

export default App;
