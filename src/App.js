import Menu from './Paginas/Menu';
import Cliente from './Paginas/Jsx/Cliente'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <p>
          <Menu/>
        </p>
      </header>
      <div class="row">
        <div class="col-md-3">
          <p><strong>Created by </strong> David Hernández</p>
        </div>
        <div class="col-md-8">
          <main>
            <div>
              <Cliente/>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
