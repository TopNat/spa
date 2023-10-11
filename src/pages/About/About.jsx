import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <Card>
            <Card.Body>
                <span className="fw-bold">Web site:</span>{' '}
                https://github.com/TopNat
                <br></br>
                <span className="fw-bold">E-mail: </span>
                gavrikovanatalie@mail.ru
                <br></br>
                <span className="fw-bold">Company: </span>SkyPro
            </Card.Body>
        </Card>
    );
};
export default About;
