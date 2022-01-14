
import { Row, Col, Card, Container, Button, Form } from 'react-bootstrap';

const CardRecipe = () => {
    return (
        <>
            <Container>
            <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 12 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="cardBody" >
                            <Card.Title>Card title</Card.Title>
                            
                            <Button className="mb-1"variant="primary" size="sm" active>
                            Ver receta
                            </Button>{' '}
                            <Col>
                                <Form.Control className="mb-1" size="sm" type="text" placeholder="Escribir comentario" />
                            </Col>
                            <Button className="mb-1" variant="primary" size="sm" active>
                                Borrar  
                            </Button>
                            <Button variant="primary" size="sm" active>
                                Enviar
                            </Button>
                            
                        </Card.Body>

                            
                    </Card>
                    
                     
                               
                            
                </Col>
            ))}
            </Row>
            </Container>
        
        </>

    )
}

export default CardRecipe;