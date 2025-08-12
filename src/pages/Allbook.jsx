import React from 'react'
import { Link } from 'react-router-dom'

function Allbook() {
  return (
    <>

      {/* add book button fo logined user */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <Link to={'/add-book'}><button className='btn btn-secondary w-50'>ADD BOOK</button></Link>
          </div>
          <div className="col-md-4">
            <h2 className='text-center mt-md-0 mt-3'>ALL COLLECTIONS</h2>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>


      {/* all books */}



      <div className="container">
        <div className="row">

          <div className="col-md-3">

            <div className='p-4 d-flex justify-content-center align-items-center flex-column mb-5 shadow-lg rounded'  >
              <img src="https://lh3.googleusercontent.com/proxy/YVJtQFtlysxRzcg8cm4B-Y8K6_6JpOR9qSYeoo_o3HPL2cwipGxslIk57yS9bhyqtaIgxFOm7Rx2b2cRJneIdkYTWAmciyLktaS0HI8tnLSopgHP653bkylKz38kZHvXtIYJT67QygOa" alt="book image" style={{ width: '100%', height: '300px' }} />

              <h3 className='text-primary mt-3'>hello author</h3>
              <p className='fs-4'>world</p>
              <Link to={'/view-book'} className='w-100'><button className='btn btn-secondary w-100 text-white'>View Book</button></Link>
            </div>

          </div>

          <h5 className='text-danger fs-4 text-center'>No Book Added Yet!!!</h5>


          <div className="col-md-3">
            <div className='p-4 d-flex justify-content-center align-items-center flex-column mb-5 shadow-lg rounded'  >
              <img src="https://lh3.googleusercontent.com/proxy/YVJtQFtlysxRzcg8cm4B-Y8K6_6JpOR9qSYeoo_o3HPL2cwipGxslIk57yS9bhyqtaIgxFOm7Rx2b2cRJneIdkYTWAmciyLktaS0HI8tnLSopgHP653bkylKz38kZHvXtIYJT67QygOa" alt="book image" style={{ width: '100%', height: '300px' }} />

              <h3 className='text-primary mt-3'>hello author</h3>
              <p className='fs-4'>world</p>
              <Link to={''} className='w-100'><button className='btn btn-secondary w-100 text-white'>View Book</button></Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className='p-4 d-flex justify-content-center align-items-center flex-column mb-5 shadow-lg rounded'  >
              <img src="https://lh3.googleusercontent.com/proxy/YVJtQFtlysxRzcg8cm4B-Y8K6_6JpOR9qSYeoo_o3HPL2cwipGxslIk57yS9bhyqtaIgxFOm7Rx2b2cRJneIdkYTWAmciyLktaS0HI8tnLSopgHP653bkylKz38kZHvXtIYJT67QygOa" alt="book image" style={{ width: '100%', height: '300px' }} />

              <h3 className='text-primary mt-3'>hello author</h3>
              <p className='fs-4'>world</p>
              <Link to={''} className='w-100'><button className='btn btn-secondary w-100 text-white'>View Book</button></Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className='p-4 d-flex justify-content-center align-items-center flex-column mb-5 shadow-lg rounded'  >
              <img src="https://lh3.googleusercontent.com/proxy/YVJtQFtlysxRzcg8cm4B-Y8K6_6JpOR9qSYeoo_o3HPL2cwipGxslIk57yS9bhyqtaIgxFOm7Rx2b2cRJneIdkYTWAmciyLktaS0HI8tnLSopgHP653bkylKz38kZHvXtIYJT67QygOa" alt="book image" style={{ width: '100%', height: '300px' }} />

              <h3 className='text-primary mt-3'>hello author</h3>
              <p className='fs-4'>world</p>
              <Link to={''} className='w-100'><button className='btn btn-secondary w-100 text-white'>View Book</button></Link>
            </div>
            
          </div>
          {/* end of 1 row */}
          
        </div>
      </div>


    </>
  )
}

export default Allbook