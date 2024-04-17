import React from 'react'

const Login = () => {
  return (
    <div className="loginSection">
        <h3>Vendor Login</h3>
        <form className='form'>
            <label>Email:</label>
            <input type='text'/><br></br>
            <label>Password:</label>
            <input type='password'/>
            <div className="submitBtn">
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login
