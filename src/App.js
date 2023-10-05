import Main from './pages/Main/Main';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import User from './pages/User/User';
import { Col, Container, Row } from 'react-bootstrap';
import About from './pages/About/About';
import Menu from './components/Menu/Menu';

function App() {
    return (
        <Container fluid className="m-5">
            <Row>
                <Col md="2">
                    <h1>SPA</h1>
                </Col>
                <Col md="8"></Col>
            </Row>
            <Row>
                <Col md="2">
                    <Menu />
                </Col>
                <Col md="8">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
