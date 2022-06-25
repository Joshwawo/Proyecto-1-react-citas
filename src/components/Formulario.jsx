import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propiedatario, setPropiedatario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropiedatario(paciente.propiedatario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const hanleSubmit = (evento) => {
    evento.preventDefault();

    //Validacion del fomulario
    if ([nombre, propiedatario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //Objeto de paciente
    //Se pone el objeto asi por la rebundacia que pueda haber
    const objPaciente = {
      nombre,
      propiedatario,
      email,
      fecha,
      sintomas
    };

    if(paciente.id) {
      //Editando el registro
      objPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) => 
        pacienteState.id === paciente.id ? objPaciente : pacienteState
      );

      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      //Nuevo registro
      objPaciente.id = generarId();
      //*Usando el spreed operator haciendo un copia del arreglo original
      setPacientes([...pacientes, objPaciente]);
    }

    //*Reiniciar el form
    setNombre("");
    setPropiedatario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10 ">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administrarlos</span>
      </p>
      {/*Manera de nombrarlo en JSX, el onsubmit, hanlesubmit  */}
      <form
        onSubmit={hanleSubmit}
        className="bg-white shadow-lg rounded-md py-5 px-5 mb-10 mx-5"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
            <p>Hola Mundo</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2  rounded-md"
            type="text"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2  rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propiedatario}
            onChange={(evento) => setPropiedatario(evento.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2  rounded-md"
            type="email"
            placeholder="Email contacto Propietario"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha"
          >
            Fecha
          </label>
          <input
            id="fecha"
            className="border-2 w-full p-2  rounded-md"
            type="date"
            value={fecha}
            onChange={(evento) => setFecha(evento.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2  rounded-md"
            type="date"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(evento) => setSintomas(evento.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-500 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors hover:bg-indigo-600"
          value={paciente.id ? "editar paciente" : "agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
