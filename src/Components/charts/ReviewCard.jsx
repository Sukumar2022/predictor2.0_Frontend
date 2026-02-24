import React from 'react'

const ReviewCard = () => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
        <h3 className='pop-font bg-blue-400 text-white p-2 rounded capitalize'>Some reviews</h3>
        <div className='flex flex-wrap gap-4 mt-4'>
            <div className='r-card w-100 lg:w-auto p-2 rounded-md transition duration-300'>
                <p className='text-white'>"Great product! Highly recommend."</p>
            </div>
            <div className='r-card w-100 lg:w-auto p-2 rounded-md transition duration-300'>
                <p className='text-white'>"Great product! Highly recommend."</p>
            </div>
            <div className='r-card w-100 lg:w-auto p-2 rounded-md transition duration-300'>
                <p className='text-white'>"Great product! Highly recommend."</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard