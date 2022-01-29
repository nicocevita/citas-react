import Header from "./components/Header"
import { Formulario } from "./components/Formulario"
import { ListadoPacientes } from "./components/ListadoPacientes"
import { useState } from 'react';

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto">
      <Header/>
        <div className="mt-12 md:flex">
          <Formulario pacientes={pacientes} setPacientes={setPacientes} /> 
          <ListadoPacientes/>
        </div>
    </div>
  )
}

export default App
