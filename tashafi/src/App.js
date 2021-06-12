import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route } from "react-router-dom"
import Home from './pages/index/home'
import Result from './componesnts/index/Result';
import Login from './pages/index/login';
import Signup from './pages/index/signup';


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
