import './App.css';
import UserType from './components/UserType'
import LogIn from "./components/LogInPage";
import FounderSignUp from "./components/FounderSignUp";
import LoginPage from "./components/LogInPage";
import InvestorSignUp from "./components/InvestorSignUp";
import FounderCardCarousel from "./components/FounderCarouselComponents/FouderCardCarousel";
import InvestorCardCarousel from "./components/InvestorCarouselComponents/InvestorCardCarousel";
import LandingPage from "./components/LandingPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
          <Router>
              <Switch>
          <Route path='/' exact component={LandingPage}/>
          <Route path='/founder' component={FounderSignUp}/>
          <Route path='/investor' component={InvestorSignUp}/>
              </Switch>
          </Router>
  );
}

export default App;
