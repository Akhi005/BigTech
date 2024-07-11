import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateTechnology = () => {
    const tech = useLoaderData();
    const navigate = useNavigate();
    const { _id, name, brand, product_pic, details, type, price } = tech;

    const [formData, setFormData] = useState({
        name,
        brand,
        type,
        product_pic,
        details,
        price,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        const updated = { ...formData };

        fetch(`http://localhost:5000/tech/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Technology updated successfully',
                    icon: 'success',
                    confirmButtonText: 'close'
                });
                navigate('/');
            }
        });
    };

    return (
        <div>
            <h2 className="text-2xl text-center mt-5">Update Product</h2>
            <form onSubmit={handleUpdate}>
                <div className="flex text-center items-center justify-center mt-14 bg-[#F4F3F0] p-14 gap-10">
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Model Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="product_pic"
                                    value={formData.product_pic}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <input
                    className="ml-96 mt-5 btn btn-primary border-none w-1/3 text-white font-semibold bg-gray-400 hover:bg-gray-400"
                    type="submit"
                    value="Update"
                />
            </form>
        </div>
    );
};

export default UpdateTechnology;
