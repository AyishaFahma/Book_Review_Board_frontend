import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { loginApi, registerApi } from '../services/allApi';
import Header from '../components/Header'

function Auth({ register }) {

  const navigate = useNavigate()


  //user details body
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
    password: ""
  })
  //console.log(userDetails);



  //register function
  const handleRegister = async () => {

    const { name, email, password } = userDetails
    console.log(name, email, password);


    if (!name || !email || !password) {
      toast.warning('Please fill the form Completely')
    }
    else {
      console.log('inside else');


      const result = await registerApi({ name, email, password })
      console.log(result);

      if (result.status == 200) {
        toast.success('Successfully Registered')

        navigate('/login')
      }

      else if (result.status == 406) {
        toast.warning(result.response.data)
      }
      else {
        toast.error('Something went wrong')
      }

      setuserDetails({
        name: "",
        email: "",
        password: ""
      })

    }

  }


  //login function
  const handleLogin = async()=>{

    

    const { email , password } = userDetails
    console.log(email , password);

    if(!email || !password){
      toast.warning('Please fill the form Completely')
    }
    else{
      console.log('inside else block api');
      

      const result = await loginApi({email , password})
      console.log(result);

      if(result.status == 200){
        toast.success('Logined Successfully')

        //store the logined user's data into session storage
        sessionStorage.setItem("existingUser" , JSON.stringify(result.data.existingUser))

        sessionStorage.setItem("token" , result.data.token)

        setTimeout( ()=>{
          navigate('/')
        },4000)
      }
      else if (result.status == 403 || result.status == 404 ){
        toast.warning(result.response.data)
      }
      else{
        toast.error('Something went wrong')
      }
      setuserDetails( {
        name: "",
        email: "",
        password: ""
      })

      
    }
    
  }


  return (
    <>

    <Header/>


      <div className="container ">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <div className=' my-5 d-flex justify-content-center align-items-center flex-column'>


              <form className='bg-dark-subtle p-md-5 p-3 d-flex justify-content-center align-items-center flex-column border w-100'>

                {!register ? <h1 className='mb-3'>Login</h1> :
                  <h1 className='mb-3'>Register</h1>}

                {register && <input type="text" placeholder='Name' className='form-control my-3 ' value={userDetails.name} onChange={(e) => setuserDetails({ ...userDetails, name: e.target.value })} />}

                <input type="text" placeholder='Email' className='form-control mb-3' value={userDetails.email} onChange={(e) => setuserDetails({ ...userDetails, email: e.target.value })} />

                <input type="password" placeholder='Password' className='form-control mb-3' value={userDetails.password} onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })} />


                {register ? <button type='button' onClick={handleRegister} className='btn btn-success w-100 mt-3'>Register</button>

                  :

                  <button className='btn btn-success w-100 mt-2' type='button' onClick={handleLogin}>Login</button>}

                {register ? <p className='my-3 fs-4'>Are you a Alreary User? <Link to={'/login'}>Login</Link></p>
                  :
                  <p className='my-3 fs-4'>Are you a New User?<Link to={'/register'}> Register</Link></p>}




              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />



    </>
  )
}

export default Auth