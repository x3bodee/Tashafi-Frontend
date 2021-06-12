import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route ,Switch } from "react-router-dom"
import { isExpired, decodeToken } from "react-jwt";
import {useEffect, useState} from "react"
import Home from './pages/index/home'
import Login from './pages/forms/login';
import Signup from './pages/forms/signup';
import Booking from './pages/forms/booking';
import Review from './pages/forms/review';
import Result from './componesnts/index/Result';


function App() {
  const [user , setUser] = useState({})
  const [isLogin , setIsLogin] = useState(false)

 
  // 
  useEffect(()=> {
    loginFunction()
  } , [])

  const loginFunction = () =>{
    let token = localStorage.getItem("token")
    let decodeuser = decodeToken(token)
    if (decodeuser?.user && !isExpired(token) ){
      setUser(decodeuser.user)
      setIsLogin(true)
    } else {
      setUser({})
      setIsLogin(false)
    }
  }

console.log(user)
  return (
      <BrowserRouter>

      {/* router  */}
      <Switch >
    
    <Route exact path="/" component={Home} />
    <Route exact path="/login"
    render={ () => <Login loginFunction={loginFunction}  />}  />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/booking" component={Booking} />
    <Route exact path="/review" component={Review} />
    <Route exact path='/Result' component={Result}/>

    
    {/* <Route exact path="/allmovie" component={Allmovie} />
    <Route exact path="/allmovie/:id" component={OneMovie} /> */}
    
    </Switch >
    ​    </BrowserRouter>

  );
}

export default App;
