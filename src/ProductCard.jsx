import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductCard = ({ tech }) => {
    const { product_pic, _id } = tech;
    const [disabled, setDisabled] = useState(() => {
        return localStorage.getItem(`disabled-${_id}`) === 'true';
    });
    useEffect(() => {
        localStorage.setItem(`disabled-${_id}`, disabled);
    }, [disabled, _id]);
    const handleAddMycart = () => {
        if (!disabled) {  
            fetch('http://localhost:5000/mycart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tech),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Close',
                    });
                    setDisabled(true);  
                })
                .catch((error) => {
                    console.error('Error adding to cart:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to add to cart',
                        icon: 'error',
                        confirmButtonText: 'Close',
                    });
                });
        }
    };

    return (
        <div className="card w-96 bg-gray-300 shadow-2xl m-5 rounded p-5">
            <figure>
                <img src={product_pic} alt="Product" className="h-[200px] w-[700px]" />
            </figure>
            <div className="flex gap-3 text-center">
                <button
                    onClick={handleAddMycart}
                    disabled={disabled}
                    className={`mt-3 p-2 rounded-lg ${disabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500 text-white'}`}
                >
                    {disabled ? 'Added to Cart' : 'Add to Cart'}
                </button>
                <Link to={`/DetailsCard/${_id}`}>
                    <button className="bg-red-500 mt-3 text-white p-2 rounded-lg">
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
