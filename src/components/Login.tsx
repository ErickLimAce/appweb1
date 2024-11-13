import React from 'react'
import logingImg from '../assets/marco1.jpeg'
export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div>
            <img className = 'w-full h-full object-cover' src={logingImg} alt='' />
        </div>
        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-left py-6'>Inicio de Sesion</h2>
                <div className='flex flex-col py-2'>
                    <label>Email</label>
                    <input className='border p-2'   type='text' placeholder='Email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label> Contraseña </label>
                    <input className='border p-2'  type='password' placeholder='Contraseña'/>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type='checkbox'/> Recuerdame</p>
                    <p> Olvidaste contrasena?</p>
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-400'>Iniciar sesion</button>
            </form>
        </div>

    </div>
  )
}
