export const CardLoading = () => {
  return (
  <div className="w-72 animate-pulse pt-6 rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="w-36 h-36 bg-gray-200 mx-auto mt-5 dark:bg-gray-700 mb-2"></div>
      <div className='p-4'>
        <div className="h-6 max-w-[200px] bg-gray-200 dark:bg-gray-700 mb-2 items-center mx-auto"></div>
        <div className="h-6 w-[80px] mt-5 rounded-md bg-gray-200 items-center mx-auto dark:bg-gray-700 mb-2.5"></div>
      </div>
  </div>
  )
}
