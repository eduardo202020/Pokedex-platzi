import React from 'react'

export const CardLoading = () => {
  return (
  <div className="w-72 animate-pulse pt-6 rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="w-36 h-36 bg-gray-200 mx-auto dark:bg-gray-700 mb-2"></div>
      <div className='p-4'>
        <div className="h-5 max-w-[200px] bg-gray-200 dark:bg-gray-700 mb-2 items-center mx-auto"></div>
        <div className="h-3 w-[200px] bg-gray-200 dark:bg-gray-700 mb-2.5"></div>
      </div>
  </div>
  )
}
