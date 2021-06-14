import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { isExpired, decodeToken } from "react-jwt";
import { useEffect, useState } from "react"
import Home from './pages/index/home.page'
import Login from './pages/forms/login.page';
// import Login from './componesnts/forms/Login';
import Signup from './pages/forms/signup.page';
import Booking from './pages/forms/booking.page';
import Review from './pages/forms/review.page';
import Result from './componesnts/index/Result';
import Session from './pages/forms/session.page';
import Doctor from './pages/doctor/Doctor.page';
import Profile from './componesnts/profile/Profile'
import Navbar from './componesnts/index/NavBar'


function App() {
  const [user, setUser] = useState({})
  const [isLogin, setIsLogin] = useState(false)



  // 
  useEffect(() => {
    loginFunction()
  }, [])

  const loginFunction = () => {
    console.log('inside login function')
    let token = localStorage.getItem("token")
    let decodeuser = decodeToken(token)
    if (decodeuser?.user && !isExpired(token)) {
      setUser(decodeuser.user)
      setIsLogin(true)
    } else {
      setUser({})
      setIsLogin(false)
    }
    console.log('end of login function')
  }

  console.log(user)
  return (

    <>
    
      <BrowserRouter>
      <Navbar isLogin={isLogin}/>
      {/* router  */}
      <Switch >

    
    <Route exact path="/" component={Home} isLogin ={isLogin}  />
    <Route exact path="/signup" component={Signup} isLogin ={isLogin}  />


    <Route exact path="/login"
      render={ () =>  isLogin==true ? <Home user={user} /> : <Login login={loginFunction} isLogin ={isLogin}  />}  />


    <Route exact path="/profile" 
    render={() => isLogin==true ? <Profile user={user} /> : <Login login={loginFunction}  />} />
    {/* <Route exact path="/booking/:id" 
     render={() => isLogin==true ? <Booking user={user} /> : <Login login={loginFunction}  />}  /> */}
    
    <Route exact path='/session'  
    render={() => isLogin==true ? <Session user={user} /> : <Login login={loginFunction}  />}  />
    
    <Route exact path="/review/:id" 
     render={() => isLogin==true ? <Review user={user} /> : <Login login={loginFunction}  />} />


    <Route exact path='/Result/:id/:city' component={Result} isLogin ={isLogin} />
    {/* <Route exact path='/Result' component={Result}/> */}
    <Route exact path='/doctorp/:id' component={Doctor} isLogin ={isLogin} />
    <Route exact path='/booking/:id' component={Booking} isLogin ={isLogin} />
    

   {/* <Route exact path="/booking" component={Booking} isLogin ={isLogin} /> */}
    {/* <Route exact path="/review" component={Review} /> */}

  
    
    </Switch >
    ​    </BrowserRouter>
</>

  );
}

export default App;
