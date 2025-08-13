import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {



  const [token, setToken] = useState("")

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token")
    setToken(storedToken) // will be null if not found
  }, [token])
  

  return (
    <>

    {/* nav bar */}

    <div className='d-flex justify-content-center align-items-center'>
        <img src="https://openclipart.org/image/800px/275692" alt="no image"  style={{width:'60px' , height:'60px'}} className='md:me-5 me-3'/>
        <h1>Book Review Board</h1>
    </div>

    <nav className='bg-dark-subtle d-flex justify-content-center align-items-center'>
        <ul className='d-flex justify-content-center align-items-center mt-3' style={{listStyle:'none', cursor:'pointer'}}>

            <Link to={'/'} style={{textDecoration:'none'}}><li className='fw-bold fs-4 me-3 text-dark' >Home</li></Link>

            {!token && <Link to={'/login'}><li className='me-3'><button className='btn btn-outline-secondary fw-bold text-dark'>Login</button></li></Link>}

            <Link to={'/all-books'} style={{textDecoration:'none'}}><li className='fw-bold fs-4 me-3 text-dark'>Book</li></Link>

        </ul>
    </nav>
    
    
    </>
  )
}

export default Header