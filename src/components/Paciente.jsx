import { useEffect } from "react";

export const Paciente = ({paciente, setPaciente}) => {
  const {nombreMascota, nombrePropietario, fecha, email, sintomas} = paciente
  
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Nombre Mascota: {' '}
      <span className='font-normal normal-case'>{nombreMascota}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Nombre paciente: {' '}
      <span className='font-normal normal-case'>{nombrePropietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Email: {' '}
      <span className='font-normal normal-case'>{email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Fecha: {' '}
      <span className='font-normal normal-case'>{fecha}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Sintomas: {' '}
      <span className='font-normal normal-case'>{sintomas}</span>
    </p>
    <div className="flex justify-between mt-10">
        <button 
        type='button'
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-bold uppercase"
        onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button 
        type='button'
        className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded text-white font-bold uppercase"
        >Eliminar</button>
    </div>
</div>
  );
};
