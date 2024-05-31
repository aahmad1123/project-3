import {Link, NavLink} from "react-router-dom"
function Nav(){
    return(
        <div>
          <ul className="nav-list">
            <ul><NavLink to="/LogIn" className= "link" activeClassName = "active">Log-in</NavLink></ul>
          </ul>
        </div>
    )
};

export default Nav;