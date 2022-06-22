import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Disciplinas from './Disciplinas';
import Sobre from './Sobre';
import NotFound from './NotFound';
import Menu from './Menu';
import CSR from './CSR';
import LPBD from './LPBD';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Disciplinas" element={<Disciplinas/>}/>  
        <Route exact path="/Disciplinas/CSR" element={<CSR/>}/>       
        <Route exact path="/Disciplinas/LPBD" element={<LPBD/>}/>        
        <Route exact path="/Sobre" element={<Sobre/>}/>        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
