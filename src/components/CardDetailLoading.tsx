import React from 'react'

export const CardDetailLoading = () => {
  return (
    <section className='grid place-items-center'>
      <div className="flex flex-col w-80 animate-pulse p-4 rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700 md:flex-row md:w-[640px] md:justify-center">
        <div className='leftSide flex flex-col justify-around md:mr-14'>
          <div className='flex justify-between'>
            <div className='w-14 h-6 rounded-md bg-gray-200 dark:bg-gray-700'></div>
            <div className='w-14 h-6 rounded-md bg-gray-200 dark:bg-gray-700'></div>
          </div>
          <div className='grid place-items-center'>
            <div className="my-auto w-72 h-72 bg-gray-200 mt-5 dark:bg-gray-700 mb-2"></div>

          </div>
        </div>
        <div className='rightSide flex flex-col items-center'>
          <div className='name w-32 h-10 mb-4 rounded-md bg-gray-200 dark:bg-gray-700'></div>
          <div className='w-14 h-6 mb-6 bg-gray-200 dark:bg-gray-700'></div>
          <div className='grid grid-cols-2 w-full justify-items-center mb-6'>
            <div>
              <div className="h-8 max-w-[200px] rounded-md bg-gray-200 dark:bg-gray-700 mb-2 items-center mx-auto"></div>
              <div className="h-4 w-[80px] rounded-md bg-gray-200 items-center mx-auto dark:bg-gray-700"></div>
            </div>
            <div>
              <div className="h-8 max-w-[200px] rounded-md bg-gray-200 dark:bg-gray-700 mb-2 items-center mx-auto"></div>
              <div className="h-4 w-[80px] rounded-md bg-gray-200 items-center mx-auto dark:bg-gray-700"></div>
            </div>
          </div>
          <div className='w-32 h-8 mb-5 rounded-md bg-gray-200 dark:bg-gray-700'></div>
          <div className='w-64 h-4 mb-2 bg-gray-200 dark:bg-gray-700'></div>
          <div className='w-64 h-4 mb-2 bg-gray-200 dark:bg-gray-700'></div>
          <div className='w-64 h-4 mb-2 bg-gray-200 dark:bg-gray-700'></div>
          <div className='w-64 h-4 mb-2 bg-gray-200 dark:bg-gray-700'></div>
          <div className='w-64 h-4 mb-2 bg-gray-200 dark:bg-gray-700'></div>
          <div className='w-64 h-4 mb-2 bg-gray-200 dark:bg-gray-700'></div>
        </div>
      </div>
    </section>
  )
}
