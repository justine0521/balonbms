import React from 'react'

function SubmitModal({progressBarRef}) {
  return (
    <div className="fixed right-5 top-5 flex items-center justify-center z-50">
        <div className="bg-green-100 p-5 rounded shadow-lg w-80">
            <p className="text-center text-gray-600 mb-4">Form Submitted Successfully!</p>
            <div ref={progressBarRef} className="h-1 bg-green-500"></div>
        </div>
    </div>
  )
}

export default SubmitModal