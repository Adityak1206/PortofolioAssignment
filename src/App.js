import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Resume from './pages/resume'
import Contact from './pages/contact'
import Navbar from './components/navBar'
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      {/* Main Page Content */}
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
