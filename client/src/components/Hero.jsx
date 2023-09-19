import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 hero-card bg-light w-75">
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="text-center mb-4">
              MERN Authentication
            </Card.Title>
            <Card.Text className="text-center mb-4">
              Welcome to the MERN Auth starter
            </Card.Text>
            <div className="d-flex">
              <LinkContainer to="/register">
                <Button variant="primary" className="me-3">
                  Register
                </Button>
              </LinkContainer>
              <LinkContainer to="/login">
                <Button variant="secondary">
                  Login
                </Button>
              </LinkContainer>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Hero;