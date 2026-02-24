import React from 'react'

const ReviewCard = () => {
  return (
    <div className='bg-[#303952] rounded-lg shadow-md p-6'>
        <h3 className='pop-font text-lg text-white p-2 rounded capitalize'>Some reviews</h3>
        <div className='flex flex-wrap gap-4 mt-4'>
            <div className='r-card w-100 lg:w-auto p-2 rounded-md transition duration-300'>
                <p className='text-white'>"Great product! Highly recommend."</p>
            </div>
            <div className='r-card w-100 lg:w-auto p-2 rounded-md transition duration-300'>
                <p className='text-white'>"Best product, value for money"</p>
            </div>
            <div className='r-card w-100 lg:w-auto p-2 rounded-md transition duration-300'>
                <p className='text-white'>"Nice one"</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard
