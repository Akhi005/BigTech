import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex justify-around items-center py-3 absolute top-0 left-0 w-full font-semibold text-xl text-black z-10">
            <div className="flex justify-center items-center">
                <h2 className="ml-2 text-2xl font-bold italic">BigTech</h2>
            </div>
            <div className="flex gap-7">
                <Link to="/" className="mt-4">Home</Link>
                <Link to="/addtechnology" className="mt-4"><button>Add_Product</button></Link>
                <Link to="/productlist" className="mt-4"><button>Product_List</button></Link>
                <Link to="/mycart" className="mt-4">My Cart</Link>
            </div>
            {/* <DarkModeToggle /> */}
        </div>
    );
};

export default Navbar;
