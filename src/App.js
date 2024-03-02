import './App.css';
import Nav from './component/nav';
import Post from './component/post';

import {
  Routes,
  Route,
 
} from "react-router-dom";

import Logo from './component/logo';

import Admin from './component/admin';
function App() {
  
 
  return (
    
    <div className="container">
        <Nav />
            

            <Routes>
                <Route path="/logo"  element={<Logo />}/>
                <Route path="/blog" element={<Post />}/>
                <Route path="/admin" element={<Admin />}/>
            </Routes>   
       
    </div>
 
  );
}

export default App;

