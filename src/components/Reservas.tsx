import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MARCOLogotipoOK from "../assets/MARCO-Logotipo-OK.png";
import Fondo from "../assets/Fondo.png"; // Importa la imagen de fondo

export default function Reservas() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    motivo: '',
    dia: '',
    cantidad: '',
    aceptado: false,
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, apellido, motivo, dia, cantidad, aceptado } = formData;

    // Validar que todos los campos estén completos
    if (!nombre.trim() || !apellido.trim() || !motivo.trim() || !dia.trim() || !cantidad.trim() || !aceptado) {
      setError('Por favor, complete todos los campos y acepte los términos.');
      return;
    }

    setError(''); // Limpia el mensaje de error
    alert('Su reserva se ha generado exitosamente.');
    // Aquí podrías redirigir o enviar los datos al servidor
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Fondo})` }}>
      <div className="bg-green-200 p-1 shadow-md">
        <div className="flex justify-between items-center">
          <img src={MARCOLogotipoOK} alt="MARCO Logotipo" className="w-32 h-auto" />
          <ul className="flex space-x-8 font-semibold text-green-700 text-xl">
            <li className="cursor-pointer hover:text-green-900 transition">Explora</li>
            <li className="cursor-pointer hover:text-green-900 transition">Venta</li>
            <li className="cursor-pointer hover:text-green-900 transition">Interactuar</li>
            <li className="cursor-pointer hover:text-green-900 transition">Compra</li>
          </ul>
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
            onClick={() => navigate("/")}
          >
            Página Inicio
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">Formulario de Reserva</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div>
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              id="apellido"
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Ingrese su apellido"
            />
          </div>
          <div>
            <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">Motivo de visita</label>
            <input
              id="motivo"
              type="text"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="¿Por qué desea visitar?"
            />
          </div>
          <div>
            <label htmlFor="dia" className="block text-sm font-medium text-gray-700">Día de visita (dd/mm/aa)</label>
            <input
              id="dia"
              type="text"
              name="dia"
              value={formData.dia}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Ej. 25/12/24"
            />
          </div>
          <div>
            <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">Cantidad de personas</label>
            <input
              id="cantidad"
              type="number"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Número de personas"
            />
          </div>
          <div className="flex items-center">
            <input
              id="aceptado"
              type="checkbox"
              name="aceptado"
              checked={formData.aceptado}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <label htmlFor="aceptado" className="ml-2 text-sm text-gray-900">Aceptar términos y condiciones</label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
            >
              Confirmar Reserva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
