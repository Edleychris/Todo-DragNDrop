import './App.css';
import {BrowserRouter as Router,
Routes,
Route} from 'react-router-dom';
import Dashbord from './Body/Dashbord';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend} >
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashbord/>} />
      </Routes>
    </div>
    </Router>
    </DndProvider>
  );
}

export default App;
