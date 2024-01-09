/* Crea un componente AllTheBooks. Questo componente dovrà leggere un file .json 
fornito e mostrare le cover dei libri nella pagina (puoi utilizzare una Card 
di react-bootstrap). */

import { Container, Card, Row, Button } from 'react-bootstrap';
import fantasyBooks from '../API/books/fantasy.json';

let fantasy = fantasyBooks;
console.log(fantasy);

export default function AllTheBooks() {
    return (
        <Container>
            <h2 className='text-center my-3'>Fantasy</h2>
            <Row className='gap-3 justify-content-between'>
                {fantasy.map((book) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                {book.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    );
}