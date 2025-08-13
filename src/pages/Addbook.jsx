import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { addBookApi } from '../services/allApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Addbook() {

  //state for storing token
  const [token, settoken] = useState("")

  //book details
  const [bookDetails, setbookDetails] = useState({
    title: "",
    author: "",
    description: "",
    image: ""
  })

  console.log(bookDetails);

  const navigate = useNavigate()


  //function to add a book
  const hadleSubmit = async () => {

    const { title, author, description, image } = bookDetails
    console.log(title, author, description, image);

    if (!title || !author || !description || !image) {
      toast.warning('Please fill the form Completely')
    }
    else {

      //create reqheader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      const result = await addBookApi({ title, author, description, image }, reqHeader)
      console.log(result);

      if (result.status == 200) {
        toast.success("Book Added Successfully")

        setTimeout( ()=>{
          navigate('/all-books')
        },3000)
        
      }
      else if (result.status == 401) {
        toast.warning(result.response.data)
      }
      else {
        toast.error("Something went wrong")
      }

      setbookDetails({
        title: "",
        author: "",
        description: "",
        image: ""
      })

    }
  }



  //token fetching from sessionstorage
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const tok = sessionStorage.getItem("token")
      settoken(tok)
    }
  })



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

                <input type="text" placeholder='Enter Title of the Book' className='form-control my-3' value={bookDetails.title} onChange={(e) => setbookDetails({ ...bookDetails, title: e.target.value })} />

                <input type="text" placeholder='Enter Author of the Book' className='form-control mb-3' value={bookDetails.author} onChange={(e) => setbookDetails({ ...bookDetails, author: e.target.value })} />

                <input type="text" placeholder='Add Cover Image of the Book(URL)' className='form-control mb-3' value={bookDetails.image} onChange={(e) => setbookDetails({ ...bookDetails, image: e.target.value })} />

                <textarea placeholder='Enter Description' className='form-control mb-3' value={bookDetails.description} onChange={(e) => setbookDetails({ ...bookDetails, description: e.target.value })}></textarea>

                <div className='d-flex align-items-center justify-content-center my-5'>
                  <button type='button' onClick={hadleSubmit} className='btn btn-success w-50'>ADD BOOK</button>
                </div>
              </form>
            </div>

          </div>

          <div className="col-md-3 "></div>
        </div>
      </div>

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />



    </>

  )
}

export default Addbook