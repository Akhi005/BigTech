import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TechCard from "./TechCard"
const MyCart = () => {
  const loadedtechnology = useLoaderData();
  const [technologies,setTechnologies] =useState(loadedtechnology);
   const [cart,setCart]=useState([]);
  const handleAddToCart=tech=>{
    const newcart=[...cart,tech];
    console.log(newcart);
    setCart(newcart);
    fetch(`http://localhost:5000/mycart/${newcart}`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newcart)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data) })
  }
  return (
    <div>
      <h1 className='text-4xl text-center mt-10'>Technology : {technologies.length}</h1>
      {
        <div className='grid md:grid-cols-3 mt-5 mb-10'>  {
          technologies.map(tech => <TechCard key={tech._id}
            tech={tech} technologies={technologies} 
            setTechnologies={setTechnologies} 
            handleAddToCart={handleAddToCart}
            ></TechCard>) 
        }
        </div>
      }
    </div>
  );
};

export default MyCart;
