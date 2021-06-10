import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route } from "react-router-dom"
import Home from './pages/index/home'
import Login from './componesnts/forms/Login';
import Signup from './componesnts/forms/Signup';
import Result from './componesnts/index/Result';


function App() {
  return (
      <BrowserRouter>

      {/* router  */}
    
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path='/Result' component={Result}/>

    
    {/* <Route exact path="/allmovie" component={Allmovie} />
    <Route exact path="/allmovie/:id" component={OneMovie} /> */}
    
    ​    </BrowserRouter>

  );
}

export default App;
