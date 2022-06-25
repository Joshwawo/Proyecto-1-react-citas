const Paciente = ({ paciente, setPaciente, elimarPaciente }) => {
  const { nombre, propiedatario, email, fecha, sintomas, id } = paciente;

  const handleElimar = () => {
    const respuesta = confirm("Deseas Eliminar Este paciente?");
    if (respuesta) {
      elimarPaciente(id)
    }
  };

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propiedatario}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase">
        Correo: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-7 bg-yellow-400 hover:bg-yellow-500 text-white font-bold uppercase rounded-md "
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-7 bg-red-400 hover:bg-red-600 text-white font-bold uppercase rounded-md"
          onClick={handleElimar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
