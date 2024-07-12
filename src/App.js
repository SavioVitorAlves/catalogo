import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import Sale from "./components/pages/Sale"
import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
function App() {
  return (
    <Router>
      <Navbar/>
      <Container> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sale" element={<Sale/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
