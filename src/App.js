
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Project from './Pages/Project';

function App() {
  return (
    <div >
    
      <Routes>
       <Route path='/' element={   <Home/>} />
       <Route path='/login' element={    <Auth/>} />
       <Route path='/register' element={     <Auth register/>} />
       <Route path='/dashboard' element={ <Dashboard/>} />
       <Route path='/project' element={ <Project/>} />

      


      </Routes>
     
 <Footer/>
 

    </div>
  );
}

export default App;
