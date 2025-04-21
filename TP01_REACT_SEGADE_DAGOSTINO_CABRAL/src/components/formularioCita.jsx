const FormularioCita = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {/* Aquí van inputs */}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
        </div>
        {/* Repite lo anterior para dueño, email, fecha, síntomas */}
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente" />
      </form>
    </div>
  );
};

export default FormularioCita;
