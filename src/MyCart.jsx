import  { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {
  const loadedTechnology = useLoaderData();
  const [technologies, setTechnologies] = useState(Array.isArray(loadedTechnology) ? loadedTechnology : []);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/mycart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTechnologies(data);
          calculateTotalPrice(data);
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const calculateTotalPrice = (data) => {
    const total = data.reduce((acc, carte) => acc + parseFloat(carte.price), 0);
    setTotalPrice(total);
  };

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/mycart/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then(() => {
      Swal.fire('Deleted!', 'This product has been deleted.', 'success');
      const remaining = technologies.filter((tec) => tec._id !== _id);
      setTechnologies(remaining);
      calculateTotalPrice(remaining);
    })
    .catch((error) => {
      console.error('Error deleting item:', error.stack);
    });
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-10 mt-10">My Cart</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="bg-base-200">
            {technologies.map((cart) => (
              <tr key={cart._id}>
                <td>{cart.name}</td>
                <td>{cart.brand}</td>
                <td>{cart.price}</td>
                <td>
                  <button
                    className="btn bg-red-500"
                    onClick={() => handleDelete(cart._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="2"></td>
              <td>Total Price:</td>
              <td>{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/">
          <button className="btn btn-active btn-primary">Back to Tech Page</button>
        </Link>
      </div>
    </div>
  );
};

export default MyCart;
