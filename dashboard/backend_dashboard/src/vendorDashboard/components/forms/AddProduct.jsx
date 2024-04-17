import React from 'react'

const AddProduct = () => {
  return (
    <div className="loginSection">
        <h3>Add Product</h3>
        <form className='form'>
            <label>Product Name</label>
            <input type='text'/><br></br>
            <label>Price</label>
            <input type='text'/><br></br>
            {/* <label>Category</label>
            <input type='text'/><br></br> */}
             <div className="checkinp">
                <label>Category:</label>
            <div className="inputsContainer">
                <div className="chekBoxContainer">
                    <label>Veg</label>
                    <input type='checkbox'/>
                </div>
                <div className="chekBoxContainer">
                    <label>non-Veg</label>
                    <input type='checkbox'/>
                </div>
            </div>
            </div><br></br>
            <label>Image</label>
            <input type='file'/><br></br>
            {/* <label>Best Sellers</label>
            <input type='text'/><br></br> */}

<div className="checkinp">
                <label>Best Sellers:</label>
            <div className="inputsContainer">
                <div className="chekBoxContainer">
                    <label>Yes</label>
                    <input type='checkbox'/>
                </div>
                <div className="chekBoxContainer">
                    <label>No</label>
                    <input type='checkbox'/>
                </div>
            </div>
            </div><br></br>

            <label>Descripton</label>
            <textarea type='text'/>
            <div className="submitBtn">
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct
