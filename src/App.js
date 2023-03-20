import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FoodHealthCrossWordComponent } from './Components/CrosswordGame/CrossWord';
import FoodHealthWordSearch from './Components/WorsSearch/WordSearch';

function App() {
  return (
    <div className='d-flex flex-column justify-content-center'>
      <div>
        <FoodHealthCrossWordComponent />
      </div>
      <div>
        <FoodHealthWordSearch />
      </div>
    </div>
  );
}

export default App;
