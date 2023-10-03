import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from "./component/navbar";
import { Cart } from './pages/cart';
import Landingpage from './pages/landingpage';
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Register from './pages/register';
import { ShopContextProvider } from './context/shop-context';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
          
      <Router>
       <ShopContextProvider>
    
        <Routes>
          <Route path="/" element={<Landingpage/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>  
          <Route path="/cart" element={<Cart/>}/>
         
        </Routes>
        </ShopContextProvider>
      </Router>
      
    </div>
  );
}

export default App;
