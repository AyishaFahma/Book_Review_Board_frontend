import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllBooksApi } from '../services/allApi'

function Allbook() {

  const [token, settoken] = useState("")

  //state for holding allbooks
  const [allBooks, setallBooks] = useState([])



  const getAllBooks = async()=>{

    const result = await getAllBooksApi()
    console.log(result);

    if(result.status == 200){
      setallBooks(result.data)
    }
    
  }
  console.log(allBooks);
  



  useEffect( ()=>{
    if(sessionStorage.getItem("token")){
      const tok = sessionStorage.getItem("token")
      settoken(tok)
    }
    getAllBooks()

  },[])


  return (
    <>

      {/* add book button fo logined user */}
      <div className="container my-5">
        <div className="row">

          <div className="col-md-4">
            {token && <Link to={'/add-book'}><button className='btn btn-secondary w-50'>ADD NEW BOOK</button></Link>}
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

          { allBooks?.length > 0 ? 
          allBooks?.map( (item , index) => (
            <div className="col-md-3" key={index}>

            <div className='p-4 d-flex justify-content-center align-items-center flex-column mb-5 shadow-lg rounded'  >
              <img src={item?.image} alt="book image" style={{ width: '100%', height: '300px' }} />

              <h4 className='text-primary mt-3'>{item?.author}</h4>
              <p className='fs-4'>{item?.title.slice(0,20)}...</p>
              <Link to={`/view-book/${item._id}`} className='w-100'><button className='btn btn-secondary w-100 text-white'>View Book</button></Link>
            </div>

          </div>
          ))
          

          :

          <h5 className='text-danger fs-4 text-center'>No Book Added Yet!!!</h5>}

          {/* end of 1 row */}
          
        </div>
      </div>


    </>
  )
}

export default Allbook