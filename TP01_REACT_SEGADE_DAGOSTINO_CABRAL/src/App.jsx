import Header from 'TP01_REACT_SEGADE_DAGOSTINO_CABRAL\src\components\header.jsx';
import FormularioCita from 'TP01_REACT_SEGADE_DAGOSTINO_CABRAL\src\components\formularioCita.jsx';
import ListaCitas from 'TP01_REACT_SEGADE_DAGOSTINO_CABRAL\src\components\listaCitas.jsx';

const App = () => (
  <div className="container mx-auto mt-20">
    <Header />
    <div className="mt-12 md:flex">
      <FormularioCita />
      <ListaCitas />
    </div>
  </div>
);

export default App;
