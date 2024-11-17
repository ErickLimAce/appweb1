import React from 'react'
import Sala from "../assets/Sala.jpeg"

export default function main() {
  return (
    <div>
      <div className="bg-green-200 p-4">
        <div className="flex justify-center items-center space-x-8 font-semibold">
          <ul className="flex space-x-8">
            <li className="cursor-pointer hover:text-green-800">Explora</li>
            <li className="cursor-pointer hover:text-green-800">Venta</li>
            <li className="cursor-pointer hover:text-green-800">Interactuar</li>
            <li className="cursor-pointer hover:text-green-800">Compra</li>
          </ul>
        </div>
      </div>
      <div className='bg-red-200'>
        <div className='flex justify-between items-center'>
          <div className='text-left'>
            <h1>DESCUBRE AL KING</h1>
          </div>
          <div className='w-1/2 p-4'>
            <img className='rounded-xl' src={Sala} alt="" />
          </div>
        </div>
      </div>
      <div className='bg-yellow-200'>
        Division 2
      </div>
      <div className='bg-blue-200'>
        Division 3
      </div>

    </div>
  )
}
