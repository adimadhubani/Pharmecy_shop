import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './componenets/Home'
import About from './componenets/About'
import Cart from './componenets/Cart'
import { useState } from 'react'
import MyAccount from './componenets/MyAccount'

// const [cartItems, setCartItems] = useState([]);

const router=createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="" element={<Home/>}/>
      <Route path="about" element={<About  />}/>
      <Route path="cart" element={<Cart />}/>
      <Route path="account" element={<MyAccount />}/>
      {/* <Route path="user/:userid" element={<User/>}/> */}
      {/* <Route loader={githubInfoLoader} path="github" element={<Github/>}/> */}
      
     

    </Route>))

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)




// import React from 'react';
// import ReactDOM from 'react-dom/client'; // For React 18+
// import './index.css'; // Global CSS file
// import App from './App'; // Main app component
// import { BrowserRouter } from 'react-router-dom'; // For routing

// // Create the root element of the application
// const root = ReactDOM.createRoot(document.getElementById('root'));

// // Render the App component inside the root element
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );



