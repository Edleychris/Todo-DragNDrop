import './App.css';
import {BrowserRouter as Router,
Routes,
Route} from 'react-router-dom';
import Dashbord from './Body/Dashbord';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import {MultiBackend, TouchTransition, MouseTransition } from 'react-dnd-multi-backend';
import { useState } from 'react';

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition,
    },
  ],
};

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSignIn = () => {
    setLoggedIn(!isLoggedIn);
  };

  if (isLoggedIn) {
    return <Dashbord />;
  }

  return (
    <div>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
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
