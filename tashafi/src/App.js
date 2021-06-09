import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route } from "react-router-dom"
import Home from './pages/index/home'


function App() {
  return (
      <BrowserRouter>

      {/* router  */}
    
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/allmovie" component={Allmovie} />
    <Route exact path="/allmovie/:id" component={OneMovie} /> */}
    
    ​    </BrowserRouter>

  );
}

export default App;
