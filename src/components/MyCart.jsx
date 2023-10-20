import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MyCart = () => {
  const { brandName } = useParams();
  const [laptops, setLaptops] = useState(brandName);

  useEffect(() => {
    // Fetch laptops of the selected brand from the backend
    fetch(`http://localhost:5000/mycart`)
      .then(response => response.json())
      .then(data => setLaptops(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <h1>MyCart</h1>
      <ul>
        {laptops.map(laptop => (
          <li key={laptop.id}>{laptop.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyCart;
