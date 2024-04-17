 import React from 'react'
 
 const Sidebar = ({showAddFirmHandler,showAddProductHandler}) => {
   return (
    <div className="sidebar">
    <h3>Vendor Logo</h3>
    <ul>
        <li><a href="#" onClick={showAddFirmHandler}>Add Firm</a></li>
        <li><a href="#" onClick={showAddProductHandler}>Add Product</a></li>
        <li><a href="#">All Products</a></li>
        <li><a href="#">User Detailes</a></li>
    </ul>
</div>
   )
 }
 
 export default Sidebar
 