import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente,elimarPaciente }) => {

 

  return (
    <div className="md:w-1/2lg:w-3/5 ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-black font-black  text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">Paciente y Citas</span>
          </p>

          <div className=" overflow-y-scroll overscroll-y-auto  md:h-screen ">
            {pacientes.map((paciente) => (
              <Paciente 
              key={paciente.id} 
              paciente={paciente} 
              setPaciente={setPaciente}
              elimarPaciente={elimarPaciente}

              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-black font-black  text-3xl text-center">
            No hay Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza Agregando Pacientes{" "}
            <span className="text-indigo-600 font-bold ">Y apareceran aqui!</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
