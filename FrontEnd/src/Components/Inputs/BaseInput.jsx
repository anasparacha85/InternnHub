import React from 'react'

export const BaseInput = ({type,name,value,onchange,placeholder}) => {
  return (
    <div>
      <input
  type={type}
  className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 text-gray-200 focus:ring-red-500 placeholder-gray-400"
  placeholder={placeholder}
  name={name}
  value={value}
  onChange={onchange}
  required
/>

    </div>
  )
}

export default BaseInput
