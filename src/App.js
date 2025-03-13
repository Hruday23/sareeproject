import ImpNav from './component/Nav';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './component/Index';
import  Silk  from './component/categorieslist/Silk';
import  Cotton  from './component/categorieslist/Cotton';
import Lehenga  from './component/categorieslist/Lehenga';
import Salwar from './component/categorieslist/Salwar';
import Regional from './component/categorieslist/Regional';
function App() {
  return (
    <>
    <ImpNav/>
      <Routes>

          <Route path='/' element={<Index/>}/>
          <Route path='/Silk' element={<Silk/>}/>
          <Route path='/Cotton' element={<Cotton/>}/>
          <Route path='/Lehenga' element={<Lehenga/>}/>
          <Route path='/Salwar' element={<Salwar/>}/>
          <Route path='/Regional' element={<Regional/>}/>
        
      </Routes>
    
      </>
     
  );
}

export default App;
