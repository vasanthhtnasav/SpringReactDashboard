import './App.css';
import Header from './pages/header/header';  // Ensure the path is correct
import Dashboard from './pages/Dashbord/Dashbord';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Postuser from './pages/empl/Postuser';
import UpdateUser from './pages/empl/UpdateUser'; 

function App() {
  return (
    <Router>
       <Header />
       
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee" element={<Postuser />} />
          <Route path="/employee/:id" element={<UpdateUser />} />
          
        </Routes>

    </Router>
    
  );
}

export default App;
