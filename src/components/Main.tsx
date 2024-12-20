import React from 'react';
import Sala from "../assets/Sala.jpeg"; // Imagen de la sala para la sección del recorrido virtual
import MARCOLogotipoOK from "../assets/MARCO-Logotipo-OK.png"; // Logotipo del museo MARCO
import Teresa from "../assets/Teresa.png"; // Imagen de la sección de eventos y exposiciones
import { useNavigate } from "react-router-dom"; // Hook para manejar la navegación entre rutas

// Componente principal que representa la página de inicio del museo MARCO
export default function Main() {
  const navigate = useNavigate(); // Hook para redirigir al usuario a otras rutas

  return (
    <div>
      {/* Navbar */}
      <div className="bg-green-200 p-4 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logotipo del museo */}
          <img src={MARCOLogotipoOK} alt="MARCO Logotipo" />
          
          {/* Menú de navegación */}
          <ul className="flex space-x-8 font-semibold text-green-700">  
            <li className="cursor-pointer hover:text-green-900 transition">Explora</li>
            <li className="cursor-pointer hover:text-green-900 transition">Venta</li>
            <li className="cursor-pointer hover:text-green-900 transition">Interactuar</li>
            <li className="cursor-pointer hover:text-green-900 transition">Compra</li>
          </ul>

          {/* Botón para iniciar sesión */}
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
            onClick={() => navigate("/login")}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>

      {/* Sección del recorrido virtual */}
      <div className="bg-red-200 py-16 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          {/* Descripción del recorrido virtual */}
          <div className="md:w-1/2 text-left space-y-6">
            <h1 className="text-4xl font-bold text-red-800">DESCUBRE NUESTRO RECORRIDO VIRTUAL</h1>
            <p className="text-lg text-gray-700">
              Recorre las extraordinarias instalaciones de las expos más recientes del museo y vive la experiencia de visitar MARCO desde cualquier parte.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Experimenta
            </button>
          </div>

          {/* Imagen ilustrativa del recorrido virtual */}
          <div className="md:w-1/2 p-4">
            <img className="rounded-xl shadow-lg" src={Sala} alt="Sala" />
          </div>
        </div>
      </div>

      {/* Sección de contenido */}
      <div className="bg-yellow-200 py-16 px-8">
        <div className="text-center space-y-4">
          <h1 className="text-xl font-medium text-yellow-700">Contenido</h1>
          <h1 className="text-4xl font-bold text-yellow-900">EL MUSEO MARCO</h1>
        </div>

        {/* Tarjetas de contenido con información del museo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">Explora las exposiciones del museo</h2>
            <p className="text-gray-600">Descubre las exposiciones actuales y pasadas del museo, con detalles y curiosidades sobre cada una.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">Conoce nuestra tienda</h2>
            <p className="text-gray-600">Desde artículos de recuerdo hasta obras de arte, encuentra algo especial en nuestra tienda.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">Descubre las noticias</h2>
            <p className="text-gray-600">Mantente al día con las últimas noticias y eventos relacionados con el museo.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">Disfruta de nuestra colección</h2>
            <p className="text-gray-600">Explora nuestra colección permanente y disfruta de las obras más emblemáticas del museo.</p>
          </div>
        </div>
      </div>

      {/* Sección de agradecimientos */}
      <div className="bg-blue-200 py-16 px-8">
        <div className="text-center space-y-6">
          <h1 className="text-xl font-medium text-blue-600">Agradecimientos</h1>
          <h1 className="text-4xl font-bold text-blue-800">EL MUSEO MARCO AGRADECE A</h1>
          <p className="text-xl text-gray-700">
            El Museo MARCO agradece a los artistas, colaboradores y patrocinadores que hacen posible nuestras exposiciones y eventos.
          </p>
        </div>
      </div>

      {/* Sección de eventos y exposiciones */}
      <div className='bg-green-200'>
        <h1 className="text-xl font-bold text-green-900 text-center pt-8">Marco</h1>
        <h1 className="text-4xl font-bold text-green-900 text-center pb-10">EVENTOS Y EXPOSICIONES</h1>
      </div>
      {/* Imagen para eventos y exposiciones */}
      <img className='w-full object-cover' src={Teresa} alt="Teresa" />

      {/* Sección de contacto */}
      <div className="bg-slate-400 py-12 px-8">
        <div className="text-center space-y-4">
          <h1 className="text-xl font-medium text-blue-700">Contacto</h1>
          <p className="text-lg text-gray-700">
            Visítanos en el Museo MARCO, ubicado en el centro de Monterrey, o contáctanos por teléfono o correo electrónico.
          </p>
        </div>
      </div>
    </div>
  );
}
