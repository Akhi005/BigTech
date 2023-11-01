import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTechnology from './components/AddTechnology.jsx';
import UpdateTechnology from './components/UpdateTechnology.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Home from './components/Home.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import MyCart from './components/MyCart.jsx';
import DetailsCard from './components/DetailsCard.jsx';
import Product from './components/Product.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:()=>fetch('data.json')
  },{
    path: "/app",
    element: <App></App>,
    loader:()=>fetch('https://big-tech-36v9saaxg-akhis-projects.vercel.ap/tech')
  },{
    path: "/addtechnology",
    element: <PrivateRoute><AddTechnology></AddTechnology></PrivateRoute>,
    
  },{
    path: "/updatetechnology/:id",
    element: <UpdateTechnology></UpdateTechnology>,
    loader:({params})=>fetch(`https://big-tech-36v9saaxg-akhis-projects.vercel.ap/tech/${params.id}`)
  },{
    path:"/signin",
    element:<SignIn></SignIn>
  },{
    path:"/signup",
    element:<SignUp></SignUp>
  },{
    path:"/users",
    element:<Users></Users>,
    loader:() => fetch('https://big-tech-36v9saaxg-akhis-projects.vercel.ap/user') 
  },{
    path:"/mycart",
    element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
    loader:()=>fetch('https://big-tech-36v9saaxg-akhis-projects.vercel.ap/mycart')
  },
  {
    path:"/DetailsCard/:id",
    element:<PrivateRoute><DetailsCard></DetailsCard></PrivateRoute>,
    loader:({params})=>fetch(`https://big-tech-36v9saaxg-akhis-projects.vercel.ap/tech/${params.id}`)
  },{
    path:"/product/:brand",
    element:<Product></Product>,
    loader:({params})=>fetch(`https://big-tech-36v9saaxg-akhis-projects.vercel.ap/tech/brand/${params.brand}`)
  }
   
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
