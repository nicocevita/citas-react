export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Formulario</h2>
      <p className="text-lg mt-5 text-center mb-10">Anañade pacientes y {' '}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div className="mb-5">
          <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input
            id='mascota' 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type='text'
            placeholder="Nombre de la mascota"
          />
        </div> 

        <div className="mb-5" >
          <label htmlFor='propetiario' className="block text-gray-700 uppercase font-bold">Propetiario</label>
          <input
            id='propetiario' 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type='text'
            placeholder="Nombre del propetiario"
          />
        </div>

        <div className="mb-5" >
          <label htmlFor='email' className="block text-gray-700 uppercase font-bold">E-Mail</label>
          <input
            id='email' 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type='email'
            placeholder="Email de contacto"
          />
        </div>

        <div className="mb-5" >
          <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
          <input
            id='alta' 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type='date'
          />
        </div> 

        <div className="mb-5" >
          <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea 
            id='sintomas'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
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
