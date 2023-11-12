import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Home from './Home';
import Users from './Users';
import About from './About';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <img src={logo} alt="Logo de la Aplicación" style={{ width: '70px', height: '40px' }} />
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/users" className="nav-link">Users</Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;
