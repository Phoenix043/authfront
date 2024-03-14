// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
//import PrivateComponent from './components/PrivateComponent'; // Replace with your private component

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/private" element={<PrivateRoute/>} />
        {/* Other public routes */}
      </Routes>
    </Router>
  );
};

export default App;
