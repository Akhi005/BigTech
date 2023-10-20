import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Theme from "./Theme";
const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleSignout=()=>{
        logOut()
       .then(()=>console.log("user logged in"))
       .catch(error=>console.error(error))
    }
    return (
        <div className="flex justify-around items-center py-3 relative bg-green-800 text-white">
        <div className="flex justify-center items-center">
            <img src="https://i.ibb.co/mNdYDM3/Logo.jpg" className="w-[35px] h-[35px]"/>
           <h2 className="ml-2 text-2xl font-bold italic">BigTech</h2>
        </div>
        <div className="flex gap-7">
           <div className="mt-4"> <NavLink to='/'> Home</NavLink></div>
           <div className="mt-4"> <NavLink to='/addtechnology'> Add Product</NavLink></div>
           <div className="mt-4"> <NavLink to='/mycart'> My Cart</NavLink></div>
           <div className="mt-4"> <NavLink to='/'> theme</NavLink></div>
           
        </div>
       {
        <div className="ml-96">{
            user ? <><span>{user.email}</span>
              <a onClick={handleSignout} className="btn btn-sm">Sign out</a>
            </>
            : <Link to="/signin">
                <button className="btn btn-sm">Sign In</button>
            </Link>
        }
        
       </div>
       
       }
        </div>
    );
};

export default Navbar;