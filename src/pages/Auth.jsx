import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <>


      <div className="container ">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <div className=' my-5 d-flex justify-content-center align-items-center flex-column'>


              <form  className='bg-dark-subtle p-md-5 p-3 d-flex justify-content-center align-items-center flex-column border w-100'>

                {!register ? <h1 className='mb-3'>Login</h1> :
                <h1 className='mb-3'>Register</h1>}

                {register && <input type="text" placeholder='Name' className='form-control my-3 ' />}

                <input type="text" placeholder='Email' className='form-control mb-3' />

                <input type="password" placeholder='Password' className='form-control mb-3' />


                {register ? <button className='btn btn-success w-100 mt-3'>Register</button>

                :

                <button className='btn btn-success w-100 mt-2'>Login</button>}

                {register ?<p className='my-3 fs-4'>Are you a Alreary User? <Link to={'/login'}>Login</Link></p>
                    :
                <p className='my-3 fs-4'>Are you a New User?<Link to={'/register'}> Register</Link></p>}




              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>



    </>
  )
}

export default Auth