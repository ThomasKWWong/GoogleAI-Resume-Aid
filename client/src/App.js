import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Receiver from './Pages/Receiver';
import Result from './Pages/Result';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Receiver/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
