import React from 'react'
import Navbar from './componenets/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './componenets/Footer'
import { useState } from 'react'


function Layout() {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [cartItems, setCartItems] = useState([]);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
 
  return (
    <div>
      
            { !isDescriptionOpen && <Navbar setSearchQuery={setSearchQuery} />}
      
      <Outlet context={{ searchQuery ,cartItems,setCartItems,isDescriptionOpen,setIsDescriptionOpen}} />

      <Footer/>
     

    </div>
  )
}

export default Layout