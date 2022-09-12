import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  
  return (
    <div className='container-fluid'>
      <NavBar />
      <hr />
      <hr />
      <hr />
      <ItemListContainer greeting="Este es un mensaje de prueba en React" />
      <hr />
      <ItemDetailContainer />
      </div>
  );
}

export default App;

