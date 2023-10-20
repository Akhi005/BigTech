import {NavLink} from "react-router-dom";
const Headers = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">Users</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
          
        </div>
    );
};

export default Headers;