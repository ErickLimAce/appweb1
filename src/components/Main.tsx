import React from 'react'
import Sala from "../assets/Sala.jpeg"
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate(); 
  return (
    <div>
      <div className="bg-green-200 p-4">
        <div className="flex justify-center items-center space-x-8 font-semibold">
          <ul className="flex space-x-8">
            <li className="cursor-pointer hover:text-green-800">Explora</li>
            <li className="cursor-pointer hover:text-green-800">Venta</li>
            <li className="cursor-pointer hover:text-green-800">Interactuar</li>
            <li className="cursor-pointer hover:text-green-800">Compra</li>
            <button 
              className="bg-green-500 text-white p-2 rounded-lg" 
              onClick={() => navigate("/login")}
            >
              Iniciar Sesión
            </button>
          </ul>
        </div>
      </div>
      <div className='bg-red-200'>
        <div className='flex justify-between items-center'>
          <div className='text-left'>
            <h1>DESCUBRE NUESTRO RECORRIDO VIRTUAL</h1>
            <p>Recorre las extraordinarias instalacioes de las expos mas recientes del Museo  y vive la experiencia de visitar MARCO desde cualquier parte.</p>
            <button className='bg-blue-600 text-white p-2 '>Experimenta</button>
          </div>
          <div className='w-1/2 p-4'>
            <img className='rounded-xl' src={Sala} alt="" />
          </div>
        </div>
      </div>
      <div className='bg-yellow-200'>
        <div className=''>
          <div className='text-center'>
            <h1 className='text-xl'>Contenido</h1>
            <h1 className='text-4xl'>EL MUSEO MARCO</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className=' p-4 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-2'>Explora las exposiciones del museo</h2>
                <p>Descubre las exposiciones actuales y pasadas del museo, con detalles y curiosidades sobre cada una.</p>
              </div>
              <div className=' p-4 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-2'>Conoce nuestra tienda</h2>
                <p>Desde artículos de recuerdo hasta obras de arte, encuentra algo especial en nuestra tienda.</p>
              </div>
              <div className=' p-4 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-2'>Descubre las noticias</h2>
                <p>Mantente al día con las últimas noticias y eventos relacionados con el museo.</p>
              </div>
              <div className=' p-4 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold mb-2'>Disfruta de nuestra colección</h2>
                <p>Explora nuestra colección permanente y disfruta de las obras más emblemáticas del museo.</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div className='bg-blue-200'>
        <div>
          <div className=' text-center'>
          <h1 className='text-xl'> Agradecimientos</h1>
          <h1 className='text-4xl'>EL MUSEO MARCO AGRADECE A</h1>
          <h1 className='text-2xl'>El Museo MARCO agradece a los artistas, colaboradores y patrocinadores que hacen posible nuestras exposiciones y eventos.</h1>
          </div>
        </div>
      </div>
      <div className=' bg-green-200'>
        <div>
          <div className=' text-center'>
          <h1 > Contacto</h1>
          <p>Visítanos en el Museo MARCO, ubicado en el centro de Monterrey, o contáctanos por teléfono o correo electrónico.</p>
          </div>
        </div>

      </div>

    </div>
  )
}
