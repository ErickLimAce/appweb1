import React, { useState } from 'react'; // Importamos React y useState para manejar el estado de los datos del formulario.
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para la navegación programática en React Router.
import MARCOLogotipoOK from "../assets/MARCO-Logotipo-OK.png"; // Importa la imagen del logotipo.
import Fondo from "../assets/Fondo.png"; // Importa la imagen de fondo para la página.

export default function Reservas() {
  // Definimos el estado local del formulario utilizando useState. Los campos son: nombre, apellido, motivo, día, cantidad, aceptado.
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    motivo: '',
    dia: '',
    cantidad: '',
    aceptado: false,
  });

  // Estado para manejar posibles errores de validación en el formulario.
  const [error, setError] = useState('');
  
  // Hook useNavigate para redirigir al usuario a otras páginas dentro de la app.
  const navigate = useNavigate(); 

  // Función que maneja los cambios en los campos del formulario.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    // Actualizamos el estado de formData según el campo modificado.
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value, // Para checkboxes, usamos 'checked', para otros campos usamos 'value'.
    });
  };

  // Función para manejar el envío del formulario.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario (recarga de página).
    
    const { nombre, apellido, motivo, dia, cantidad, aceptado } = formData;

    // Validación de los campos. Si algún campo está vacío o el checkbox de aceptación no está marcado, mostramos un mensaje de error.
    if (!nombre.trim() || !apellido.trim() || !motivo.trim() || !dia.trim() || !cantidad.trim() || !aceptado) {
      setError('Por favor, complete todos los campos y acepte los términos.');
      return;
    }

    setError(''); // Si no hay error, limpiamos el mensaje de error.
    
    alert('Su reserva se ha generado exitosamente.'); // Mostramos un mensaje de confirmación (esto puede ser reemplazado con una lógica más compleja, como una solicitud a un servidor).
    // Aquí también puedes hacer una redirección o enviar los datos al servidor si lo deseas.
  };

  return (
    // Aplicamos un estilo de fondo utilizando la imagen importada.
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Fondo})` }}>
      
      {/* Barra de navegación en la parte superior */}
      <div className="bg-green-200 p-1 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logotipo del museo */}
          <img src={MARCOLogotipoOK} alt="MARCO Logotipo" className="w-32 h-auto" />
          
          {/* Menú de navegación */}
          <ul className="flex space-x-8 font-semibold text-green-700 text-xl">
            {/* Elementos de navegación */}
            <li className="cursor-pointer hover:text-green-900 transition">Explora</li>
            <li className="cursor-pointer hover:text-green-900 transition">Venta</li>
            <li className="cursor-pointer hover:text-green-900 transition">Interactuar</li>
            <li className="cursor-pointer hover:text-green-900 transition">Compra</li>
          </ul>
          
          {/* Botón para navegar a la página de inicio */}
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
            onClick={() => navigate("/")} // Al hacer clic, redirige a la página de inicio.
          >
            Página Inicio
          </button>
        </div>
      </div>

      {/* Sección principal del formulario de reserva */}
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">Formulario de Reserva</h2>

        {/* Si hay errores, los mostramos en un mensaje de texto rojo */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Formulario con campos de entrada */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo para nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange} // Se llama a handleChange cada vez que el usuario escribe en el campo.
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Ingrese su nombre"
            />
          </div>

          {/* Campo para apellido */}
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

          {/* Campo para motivo de visita */}
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

          {/* Campo para día de visita */}
          <div>
            <label htmlFor="dia" className="block text-sm font-medium text-gray-700">Día de visita</label>
            <input
                id="dia"
                type="date"
                name="dia"
                value={formData.dia}
                onChange={handleChange}
                min="2024-11-01" // Fecha mínima permitida
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
        </div>

          {/* Campo para cantidad de personas */}
          <div>
            <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">Cantidad de personas</label>
            <input
              id="cantidad"
              type="number"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
              min="1" // Mínimo de personas
              max="100" // Máximo de personas
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Número de personas"
            />
          </div>

          {/* Checkbox para aceptar los términos y condiciones */}
          <div className="flex items-center">
            <input
              id="aceptado"
              type="checkbox"
              name="aceptado"
              checked={formData.aceptado}
              onChange={handleChange} // Actualiza el estado de 'aceptado' cuando el usuario marca o desmarca el checkbox.
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <label htmlFor="aceptado" className="ml-2 text-sm text-gray-900">Aceptar términos y condiciones</label>
          </div>

          {/* Botón para enviar el formulario */}
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
