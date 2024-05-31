import { Link } from "react-router-dom"
function LogIn () {
    return (
    <div>
        <h1>Final Project</h1>
        <h5 className="nav-list"><Link className= "link" to="/" activeClassName = "active">Home</Link></h5>
        <div className="login-form" >
            <h2>Log In</h2>
            <form className="form">
            <label>
                Username:
                <input type="text" name="name" />
            </label>
            <label>
                Password:
                <input type="text" name="name" />
            </label>
            
            <input type="submit"  value="Submit" />
            </form>
            <div className="signupForm">
                <h2>Sign Up</h2>
            <form className="form">
            <label>
                Username:
                <input type="text" name="name" />
            </label>
            <label>
                Password:
                <input type="text" name="name" />
            </label>
            <label>
                E-mail:
                <input type="text" name="name" />
            </label>
            <input type="submit" className="submit" value="Submit" />
            </form>
            </div>
        </div>
    </div>
    )
}

export default LogIn