
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Index from './component/Index';
import Silk from './component/Silk';
import Cotton from './component/Cotton';
import Lehenga from './component/Lehenga';
import Salwar from './component/Salwar';
import Regional from './component/Regional';
function App() {
  return (
      
      <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/Silk' element={<Silk/>}/>
          <Route path='/Cotton' element={<Cotton/>}/>
          <Route path='/Lehenga' element={<Lehenga/>}/>
          <Route path='/Salwar' element={<Salwar/>}/>
          <Route path='/Regional' element={<Regional/>}/>
        
      </Routes>
  );
}

export default App;
