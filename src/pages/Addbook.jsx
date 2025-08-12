import React from 'react'

function Addbook() {
  return (
    <>

    <div className="container my-5 px-3">
      <div className="row">
        <div className="col-md-3 "></div>

        <div className="col-md-6 rounded d-flex align-items-center justify-content-center flex-column py-3 px-4 bg-dark-subtle ">

          <h3 className='fw-semibold mt-3 mb-4'>ENTER BOOK DETAILS</h3>

          {/* add book form */}

          <div className='w-100'>
            <form action="" className=''>

              <input type="text" placeholder='Enter Title of the Book' className='form-control my-3'/>

              <input type="text" placeholder='Enter Author of the Book' className='form-control mb-3'/>

              <input type="text" placeholder='Add Cover Image of the Book(URL)' className='form-control mb-3'/>

              <textarea placeholder='Enter Description' className='form-control mb-3'></textarea>

              <div className='d-flex align-items-center justify-content-center my-5'><button className='btn btn-success w-50'>ADD BOOK</button></div>
            </form>
          </div>

        </div>
        
        <div className="col-md-3 "></div>
      </div>
    </div>
    
    
    </>
  )
}

export default Addbook