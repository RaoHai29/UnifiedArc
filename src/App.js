
import './App.css';
import About from './Components/About/About';
import Consulting from './Components/Consulting/Consulting';
import Migration from './Components/Migration/Migration';
import Cost from "./Components/CostOptimization/Cost"
import Main from './Components/Main/Main.jsx';
import Dev from './Components/DevOps/Dev'
import Arch from "./Components/ArchitectManagement/Arch"
import IaC from './Components/IaC/Iac'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import ContactPage from './Components/Contact Page/ContactPage';
import SmoothScroll from './SmoothScroll';
import ServicePages from './Components/ServicePages/ServicePages';
function App() {
  return (
    <div className="App">
      <Router>
          <SmoothScroll />
          <Routes>
              <Route exact="true" path='/' element={<Main />}  /> 
              <Route exact="true" path='/about' element={<About />}  />
              <Route exact="true" path='/consulting' element={<Consulting />}  /> 
              <Route exact="true" path='/migration' element={<Migration />}  /> 
              <Route exact="true" path='/cost' element={<Cost />}  /> 
              <Route exact="true" path='/devops' element={<Dev />}  /> 
              <Route exact="true" path='/arch' element={<Arch />}  /> 
              <Route exact="true" path='/iac1' element={<IaC />}  /> 
              <Route exact="true" path='/contactpage' element={<ContactPage />}  /> 
              <Route exact="true" path='/ServicePage' element={<ServicePages />}  /> 

          </Routes>
      </Router>
    </div>
  );
}

export default App;
