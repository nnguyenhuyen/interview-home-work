import "./nav.css";
import img from './img.svg';
import { NavLink } from "react-router-dom";
const Nav= () =>{
    return (
        <nav className="home">
                
                    <div className="nav">
                    <ul className="navbar" class="nav  nav-fill">
                        
                        <li className="logo">
                            <NavLink to="/logo" activeClassName='active' exact className="nav-link ">Logo</NavLink>
                           
                        </li>
                        <li className="blog">
                             <NavLink to="/blog" activeClassName='active' exact className="nav-link">Blogs</NavLink>
                        </li>
                        <li className="adam">
                          <NavLink to="/admin" activeClassName='active' exact className="nav-link">
                          <img src={img} className="img" alt="img" />
                          Adam Levine</NavLink>
                        </li>

                        </ul>
                    </div>
               
            </nav> 
    )
}
export default Nav;