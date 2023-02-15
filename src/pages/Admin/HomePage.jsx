import React from 'react'

function HomePage() {
  const productData = JSON.parse(localStorage.getItem('productData'))
  // console.log(productData)
  return (
    <div>
      <div className="text-center text-2xl m-5">
        <h1>These are products</h1>
      
      </div>
    </div>
  )
}

export default HomePage