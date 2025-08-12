import React from 'react'

function Viewbook() {
  return (
    <>
      {/* details of book */}
      <div className="container my-5">
        <div className="row border p-md-4 p-3 rounded shadow">
          {/* book image */}
          <div className="col-md-5">
            <img src="https://lh3.googleusercontent.com/proxy/YVJtQFtlysxRzcg8cm4B-Y8K6_6JpOR9qSYeoo_o3HPL2cwipGxslIk57yS9bhyqtaIgxFOm7Rx2b2cRJneIdkYTWAmciyLktaS0HI8tnLSopgHP653bkylKz38kZHvXtIYJT67QygOa" alt="no image" style={{ width: '100%', height: '500px' }} />
          </div>
          {/* book title , author, description */}
          <div className="col-md-7 d-flex align-items-center flex-column p-2">
            <h2 className='my-3 fw-bolder text-center'>Harry Potter 2:and the Chamber of Secrets</h2>
            <h4 className='text-center'>Author : JK ROWLING</h4>
            <p className='mt-4' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a odio culpa magni voluptatibus animi cumque modi, commodi quam numquam dolore vel aliquid iusto nemo autem quae soluta sed laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad similique maxime enim, soluta velit commodi corrupti nam. Mollitia eligendi velit omnis perspiciatis unde veritatis accusamus dignissimos quibusdam officia odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet aliquam ipsam, accusantium aliquid neque vitae expedita quos incidunt necessitatibus animi nesciunt adipisci, dolorum placeat porro architecto minus amet consequuntur?</p>




            {/* review section */}

            <div className="container mt-5 mb-4">
              <div className="row">
                <div className="col-md-6">
                  <h3 className='fw-medium'>Book Review</h3>
                </div>
                <div className="col-md-6">
                  <button className='btn btn-secondary w-100 ' data-bs-toggle="modal" data-bs-target="#exampleModal">ADD REVIEW</button>
                </div>
              </div>
            </div>





            {/* modal to add review */}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">ADD REVIEW</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">

                    {/* modal body form */}

                    <form action="">

                      <textarea placeholder='Enter comment' className='form-control my-3'></textarea>

                      <input type="number" placeholder='Rating' min={1}
                        max={5} className='form-control mb-3' />


                    </form>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success">SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>







            <div className="container">
              <div className="row">

                <div className="col-md-12">

                  {/* review */}

                  <table className='table table-bordered'>
                    {/* thead */}
                    <thead>
                      <tr>
                        <th className='bg-secondary text-light'>USER</th>
                        <th className='bg-secondary text-light'>COMMENT</th>
                        <th className='bg-secondary text-light'>RATING</th>
                      </tr>
                    </thead>

                    {/* tbody */}

                    <tbody>

                      <tr>
                        <td>asna@gmail.com</td>
                        <td style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, eum dolorem illo ad, quam vel consectetur praesentium sapiente architecto aperiam sunt quod laboriosam iste quasi eos obcaecati excepturi quibusdam fugiat.</td>
                        <td>3</td>
                      </tr>

                      <p className='text-danger mt-4'>No Review Yet!!!</p>


                    </tbody>
                  </table>
                </div>

              </div>
            </div>


          </div>

        </div>
      </div>


    </>
  )
}

export default Viewbook