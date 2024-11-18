import React, { useState } from "react";
import logingImg from "../assets/marco1.jpeg"; // Imagen de fondo para la pantalla de inicio de sesión
import { useNavigate } from "react-router-dom"; // Hook para redireccionar entre rutas

// Componente funcional para la pantalla de inicio de sesión
const Login: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegación
  const [email, setEmail] = useState(""); // Estado para el campo de email
  const [password, setPassword] = useState(""); // Estado para el campo de contraseña
  const [error, setError] = useState(""); // Estado para mensajes de error

  // Maneja el evento de envío del formulario
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Validación simple: verificar que los campos no estén vacíos
    if (!email.trim() || !password.trim()) {
      setError("Ingrese email y contraseña"); // Muestra un mensaje de error
      return;
    }

    setError(""); // Limpia el mensaje de error si los campos están completos
    navigate("/Reservas"); // Redirige al usuario a la ruta principal "/Reservas"
  };

  return (
    // Diseño general de la página: división en dos columnas
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      
      {/* Columna izquierda: imagen de fondo visible solo en pantallas grandes */}
      <div className="hidden lg:block relative h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={logingImg} // Fuente de la imagen de fondo
          alt="Login Background" // Descripción alternativa
        />
      </div>

      {/* Columna derecha: formulario de inicio de sesión */}
      <div className="flex items-center justify-center bg-gray-100 p-2 sm:p-4 lg:p-8">
        <form
          onSubmit={handleLogin} // Evento de envío del formulario
          className="max-w-md w-full bg-white p-4 sm:p-6 rounded-lg shadow-lg"
        >
          {/* Título del formulario */}
          <h2 className="text-2xl sm:text-3xl font-bold text-left pb-2 sm:pb-4">
            Inicio de Sesión
          </h2>

          {/* Campo de entrada: Email */}
          <div className="flex flex-col py-1 sm:py-2">
            <label className="font-semibold">Email</label>
            <input
              className="border border-gray-300 p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text" // Tipo de entrada
              placeholder="Email" // Texto de marcador de posición
              value={email} // Valor del estado del email
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado con cada cambio
            />
          </div>

          {/* Campo de entrada: Contraseña */}
          <div className="flex flex-col py-1 sm:py-2">
            <label className="font-semibold">Contraseña</label>
            <input
              className="border border-gray-300 p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password" // Tipo de entrada
              placeholder="Contraseña" // Texto de marcador de posición
              value={password} // Valor del estado de la contraseña
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado con cada cambio
            />
          </div>

          {/* Mensaje de error si no se ingresan los datos */}
          {error && (
            <p className="text-red-500 text-sm py-1">{error}</p>
          )}

          {/* Opciones adicionales */}
          <div className="flex justify-between py-1 sm:py-2 text-xs sm:text-sm">
            <p className="flex items-center">
              <input className="mr-1 sm:mr-2" type="checkbox" /> Recuérdame
            </p>
            <p className="text-indigo-600 hover:underline cursor-pointer">
              ¿Olvidaste tu contraseña?
            </p>
          </div>

          {/* Botón de envío */}
          <button
            type="submit" // Define que este botón envía el formulario
            className="w-full my-3 sm:my-5 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 transition-colors"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
