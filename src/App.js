import ItemList from './components/ItemList';
import './index.css'
// estilos 
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <h1>
          SaraGym 
        </h1>
        <ItemList />
      </main>
    </div>
  );
}

export default App;
