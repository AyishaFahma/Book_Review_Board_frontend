import React from 'react'

function Landing() {
  return (
    <>

      <div className='container'>
        <div className='row p-md-5 gap-x-10'>
          <div className='col-md-6'>
            <h4 className='text-center fw-medium mt-5'>FEATURED AUTHORS</h4>
            <h1 className='text-center mt-2 mb-5 fw-medium '>Captivates with every word</h1>
            <p className='mb-5' style={{ textAlign: 'justify' }}>Authors in a bookstore application are the visionaries behind the books that fill the shelves, each contributing their own unique voice, creativity, and perspective to the world of literature. Whether writing fiction, non-fiction, poetry, or educational works, authors bring stories, ideas, and knowledge to life in ways that resonate with readers of all backgrounds.</p>
            <p className='mb-5' style={{ textAlign: 'justify' }}>Their work spans a wide array of genres, from thrilling mysteries and heartwarming romances to thought-provoking memoirs and insightful self-help books. Through their words, authors not only entertain and inform but also inspire and challenge readers to think deeply, reflect, and grow. In a bookstore application, authors' works become accessible to readers everywhere, offering a diverse and rich tapestry of voices and experiences, all of which contribute to the evolving landscape of modern literature.</p>
          </div>

          <div className="col-12 col-md-6 mb-3">
            <img
              src="https://t4.ftcdn.net/jpg/09/69/34/27/360_F_969342778_BCPcWUTyPG7RsXUUPaJ2jDNiiCzrtyOd.jpg"
              alt="no image"
              className="img-fluid w-100 shadow-lg"
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>

        </div>
      </div>

      {/* testimonial sec */}

      <div className='d-flex justify-content-center align-items-center flex-column p-md-5 p-3'>
        <h4 className='fw-semibold'>TESTIMONIALS</h4>
        <h1 className='mt-2 mb-5 fw-medium'>See What Others Are Saying</h1>

        <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="person image" style={{ height: '100px' }} />
        <h1 className='my-5'>Treesa Joseph</h1>
        <p className='fw-semibold' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati eos sequi voluptates nesciunt, velit voluptatum amet neque itaque suscipit aliquam distinctio odit, fuga molestiae reprehenderit praesentium? Quae, asperiores veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, minima itaque! Quas harum ab dolore </p>
      </div>


    </>
  )
}

export default Landing