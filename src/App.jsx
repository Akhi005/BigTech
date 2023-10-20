
import { useLoaderData } from 'react-router-dom'
import './App.css'
import TechCard from './components/TechCard';
import { useState } from 'react';

function App() {
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
    <>
       <div className="carousel w-full mt-10 h-[350px] ">
    <div id="item1" className="carousel-item w-full">
        <img src="https://i.ibb.co/Fwbb0PW/advertise-1.jpg" className="w-full" />
    </div>
    <div id="item2" className="carousel-item w-full">
        <img src="https://i.ibb.co/Yc7HHQY/advertise-2.jpg" className="w-full" />
    </div>
    <div id="item3" className="carousel-item w-full">
        <img src="https://i.ibb.co/hCSRdXw/advertise-3.jpg" className="w-full" />
    </div>
    <div id="item4" className="carousel-item w-full">
        <img src="https://i.ibb.co/hCSRdXw/advertise-3.jpg" className="w-full" />
    </div>
</div>
<div className="flex justify-center w-full py-2 gap-2">
    <a href="#item1" className="btn btn-xs">1</a>
    <a href="#item2" className="btn btn-xs">2</a>
    <a href="#item3" className="btn btn-xs">3</a>
    <a href="#item4" className="btn btn-xs">4</a>
</div>
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
    </>
  )
}

export default App