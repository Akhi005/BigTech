import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignout = () => {
        logOut()
            .then(() => console.log("user logged out"))
            .catch(error => console.error(error));
    }

    return (
        <div className="flex justify-around items-center py-3 absolute top-0 left-0 w-full font-semibold text-xl text-black">
            <div className="flex justify-center items-center">
                <h2 className="ml-2 text-2xl font-bold italic">BigTech</h2>
            </div>
            <div className="flex gap-7 ">
                <div className="mt-4 underline-offset-0 hover:underline-offset-2">
                    <NavLink 
                        to='/' 
                        className="hover:underline hover:decoration-4 hover:decoration-blue-500">
                        Home
                    </NavLink>
                </div>
                <div className="mt-4">
                    <NavLink to='/addtechnology'> Add Product</NavLink>
                </div>
                <div className="mt-4">
                    <NavLink to='/mycart'> My Cart</NavLink>
                </div>
            </div>
            <div className="flex items-center">
                {
                    user ? (
                        <>
                            <span>{user.email}</span>
                            <a onClick={handleSignout} className="btn btn-sm ml-2">Sign out</a>
                        </>
                    ) : (
                        <Link to="/signin">
                            <button className="btn btn-sm font-bold bg-gray-300">Sign In</button>
                        </Link>
                    )
                }
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
