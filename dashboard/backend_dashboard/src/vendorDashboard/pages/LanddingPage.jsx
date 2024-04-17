import React,{useState}from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'



const LanddingPage = () => {
    const [showLogin,setShowLogin] = useState(false)
    const [showRegister,setRegister] = useState(false)
    const [showAddFirm,setshowAddFirm] = useState(false)
    const [showAddProduct,setshowAddProduct] = useState(false)


const showLoginHandler = ()=>{
    setShowLogin(true)
    setRegister(false)
    setshowAddFirm(false)
    setshowAddProduct(false)
    
}

const showRegisterHandler = ()=>{
    setRegister(true)
    setshowAddFirm(false)
    setshowAddProduct(false)
    setShowLogin(false)
}

const showAddFirmHandler = ()=>{
    setshowAddFirm(true)
    setshowAddProduct(false)
    setRegister(false)
    setShowLogin(false)
}


const showAddProductHandler = ()=>{
    setshowAddProduct(true)
    setshowAddFirm(false)
    setRegister(false)
    setShowLogin(false)
}


    return (
    <>
    <section>
        <Navbar showLoginHandler = {showLoginHandler} showRegisterHandler = {showRegisterHandler} />
        <Sidebar showAddFirmHandler={showAddFirmHandler} showAddProductHandler={showAddProductHandler}/>
        {showLogin && <Login/>}
       {showRegister && <Register/>}
        {showAddFirm && <AddFirm/>}
       {showAddProduct && <AddProduct/>}
    </section>
    </>
  )
}

export default LanddingPage
