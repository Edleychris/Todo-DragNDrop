import './App.css';
import {BrowserRouter as Router,
Routes,
Route} from 'react-router-dom';
import Dashbord from './Body/Dashbord';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashbord/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
