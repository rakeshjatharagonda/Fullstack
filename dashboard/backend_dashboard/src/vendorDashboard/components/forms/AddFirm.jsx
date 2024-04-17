import React from 'react'

const AddFirm = () => {
  return (
    <div className="loginSection">
        <h3>Add Firm</h3>
        <form className='form'>
            <label>Firm Name</label>
            <input type='text'/><br></br>
            <label>Area</label>
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
            {/* <label>Region</label>
            <input type='text'/><br></br> */}
            <div className="checkinp">
                <label>Region:</label>
            <div className="inputsContainer">
                <div className="chekBoxContainer">
                    <label>South-Indian</label>
                    <input type='checkbox'/>
                </div>
                <div className="chekBoxContainer">
                    <label>North-Indian</label>
                    <input type='checkbox'/>
                </div>
                <div className="chekBoxContainer">
                    <label>Chines</label>
                    <input type='checkbox'/>
                </div>
                <div className="chekBoxContainer">
                    <label>Bakeries</label>
                    <input type='checkbox'/>
                </div>
            </div>
            </div><br></br>

            <label>Offer</label>
            <input type='text'/><br></br>
            <label>Firm Image</label>
            <input type='file'/>
            <div className="submitBtn">
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddFirm
