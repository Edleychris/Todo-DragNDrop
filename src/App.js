import './App.css';
import {BrowserRouter as Router,
Routes,
Route} from 'react-router-dom';
import Dashbord from './Body/Dashbord';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { DndProvider, useDragDropManager } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const dragDropManager  = useDragDropManager();

  const handleSignIn = () => {
    setLoggedIn(!isLoggedIn);
  };

  if (isLoggedIn) {
    return <Dashbord />;
  }

  return (
    <div>
      <DndProvider backend={HTML5Backend} manager={dragDropManager}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login signIn={handleSignIn} />} />
              <Route path="/dashboard" element={<Dashbord />} />
            </Routes>
          </div>
        </Router>
      </DndProvider>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  );
}