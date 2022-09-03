import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  
  return (
    <div className='container-fluid'>
      <NavBar />
      <hr />
      <ItemListContainer greeting="Este es un mensaje de prueba en React" />
      </div>
  );
}

export default App;
