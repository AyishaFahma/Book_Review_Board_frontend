import React from 'react'
import { addReviewApi, getABookApi } from '../services/allApi'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Viewbook() {

  const [viewbook, setviewBook] = useState({})

  const [token, settoken] = useState("")

  //review
  const [review, setreview] = useState({
    rating : "",
    comment : ""
  })
  //console.log(review);
  

 const {id} = useParams()
 //console.log(id);
 

  //to view a single book
  const viewBook = async(id)=>{

    const result = await getABookApi(id)
    console.log(result);
    setviewBook(result.data)

  }
  //console.log(viewbook);


  const handleSubmit = async()=>{

    const {rating , comment} = review
    console.log(rating , comment);

    if(!rating || !comment){
      toast.warning('Please fill the form Completely')
    }
    else{

      //create reqheader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      const result = await addReviewApi({rating , comment} , reqHeader )
      console.log(result);
      
    }
    
  }
  


  useEffect( ()=>{
    viewBook(id)

    if(sessionStorage.getItem("token")){
      const tok = sessionStorage.getItem("token")
      settoken(tok)
    }
  },[])




  return (
    <>
      {/* details of book */}
      <div className="container my-5">
        <div className="row border p-md-4 p-3 rounded shadow">
          {/* book image */}
          <div className="col-md-5">
            <img src={viewbook?.image} alt="no image" style={{ width: '100%', height: '500px' }} />
          </div>
          {/* book title , author, description */}
          <div className="col-md-7 d-flex align-items-center flex-column p-2">
            <h2 className='my-3 fw-bolder text-center'>{viewbook?.title}</h2>
            <h4 className='text-center'>{viewbook?.author}</h4>
            <p className='mt-4' style={{ textAlign: 'justify' }}>{viewbook?.description}</p>




            {/* review section */}

            <div className="container mt-5 mb-4">
              <div className="row">
                <div className="col-md-6">
                  <h3 className='fw-medium'>Book Review</h3>
                </div>
                <div className="col-md-6">

                  {token && <button className='btn btn-secondary w-100 ' data-bs-toggle="modal" data-bs-target="#exampleModal">ADD REVIEW</button>}

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

                      <textarea placeholder='Enter comment' className='form-control my-3' value={review.comment} onChange={(e)=>setreview({...review, comment:e.target.value})} ></textarea>

                      <input type="number" placeholder='Rating' min={1}
                        max={5} className='form-control mb-3'  value={review.rating} onChange={(e)=>setreview({...review, rating:e.target.value})}   />


                    </form>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success"   onClick={handleSubmit}  >SUBMIT</button>
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

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
      


    </>
  )
}

export default Viewbook