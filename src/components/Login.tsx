import React from "react";
import logingImg from "../assets/marco1.jpeg";

export default function Login() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="hidden lg:block relative h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={logingImg}
          alt="Login Background"
        />
      </div>
      <div className="flex items-center justify-center bg-gray-100 p-2 sm:p-4 lg:p-8">
        <form className="max-w-md w-full bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-left pb-2 sm:pb-4">
            Inicio de Sesión
          </h2>
          <div className="flex flex-col py-1 sm:py-2">
            <label className="font-semibold">Email</label>
            <input
              className="border border-gray-300 p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col py-1 sm:py-2">
            <label className="font-semibold">Contraseña</label>
            <input
              className="border border-gray-300 p-1 sm:p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex justify-between py-1 sm:py-2 text-xs sm:text-sm">
            <p className="flex items-center">
              <input className="mr-1 sm:mr-2" type="checkbox" /> Recuérdame
            </p>
            <p className="text-indigo-600 hover:underline cursor-pointer">
              ¿Olvidaste tu contraseña?
            </p>
          </div>
          <button className="w-full my-3 sm:my-5 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 transition-colors">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
