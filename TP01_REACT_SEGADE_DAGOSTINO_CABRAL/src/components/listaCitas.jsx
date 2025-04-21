import Cita from 'TP01_REACT_SEGADE_DAGOSTINO_CABRAL\src\components\cita.jsx';

const ListaCitas = () => {
 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      <Cita
        mascota="Hook"
        dueño="Juan"
        email="juan@mail.com"
        fecha="2024-04-21"
        sintomas="No come ni duerme"
      />
      {/* Aquí puedes mapear más citas */}
    </div>
  );
};

export default ListaCitas;
