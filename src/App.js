import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  
  return (
    <div className='container-fluid'>
      <NavBar />
      <hr />
      <ItemListContainer greeting="Texto de prueba" />
    </div>
  );
}

export default App;
