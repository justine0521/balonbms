import React from 'react'
import { IoMdSearch } from "react-icons/io";

function TrackRequest() {
  return (
    <section className='bg-white w-full px-10 py-24 '>
      <div className='flex flex-col h-96 justify-center lg:mx-28'>
        <div className='w-fit'>
          <p className='text-4xl text-green-500 font-semibold'>Track Requested Certificate</p>

          <p className='mt-3'>Enter your Tracking Number below to track your certificate.</p>
        </div>

        <div className='flex gap-x-5 mt-10'>
          <input type="text" name='tracking' id='tracking' className=' p-2 w-3/4 border-2 rounded outline-green-500' />
          <button className='text-white py-2 px-5 rounded flex items-center justify-center gap-x-1 bg-green-500 hover:bg-green-400'>
            <IoMdSearch />
            Search
          </button>
        </div>
      </div>

    </section>

  )
}

export default TrackRequest