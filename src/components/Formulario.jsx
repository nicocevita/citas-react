import { useState, useEffect } from "react";

export const Formulario = ({pacientes, setPacientes}) => {
  const [nombreMascota, setNombreMascota] = useState();
  const [nombrePropietario, setNombrePropietario] = useState();
  const [email, setEmail] = useState();
  const [fecha, setFecha] = useState();
  const [sintomas, setSintomas] = useState();
  const [alert, setAlert] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombreMascota, nombrePropietario, email, fecha, sintomas].includes('')){
        setAlert(true)
        return;
      }

    setAlert(false);

    const objetoPaciente = {
      nombreMascota, 
      nombrePropietario, 
      email, 
      fecha, 
      sintomas
    }
    
    setPacientes([...pacientes, objetoPaciente]);
    
    setNombreMascota('');
    setNombrePropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-center text-3xl">Formulario</h2>
      <p className="text-lg mt-5 text-center mb-10">Anañade pacientes y {' '}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5">
        {alert && (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
          <p>Todos los campos son obligatorios</p>
        </div>
        )
        }
        <div className="mb-5">
          <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input
            id='mascota' 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type='text'
            placeholder="Nombre de la mascota"
            value={nombreMascota}
            onChange={(e) => {setNombreMascota(e.target.value)}}
          />
        </div> 

        <div className="mb-5" >
          <label htmlFor='propietario' className="block text-gray-700 uppercase font-bold">Propetiario</label>
          <input
            id='propietario' 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type='text'
            placeholder="Nombre del propietario"
            value={nombrePropietario}
            onChange={(e) => {setNombrePropietario(e.target.value)}}
          />
        </div>

        <div className="mb-5" >
          <label htmlFor='email' className="block text-gray-700 uppercase font-bold">E-Mail</label>
          <input
            id='email' 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type='email'
            placeholder="Email de contacto"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>

        <div className="mb-5" >
          <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
          <input
            id='alta' 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type='date'
            value={fecha}
            onChange={(e) => {setFecha(e.target.value)}}
          />
        </div> 

        <div className="mb-5" >
          <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea 
            id='sintomas'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => {setSintomas(e.target.value)}}
          />
        </div>

        <input
          type='submit'
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value='Agregar paciente'
        />
      </form>
    </div>
  );
};
