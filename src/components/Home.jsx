import React, {Component} from "react";
import {Container,Row,Col,Card,Button,Dropdown} from 'react-bootstrap';
import fantasy from "../jsons/fantasy.json"

let bookCategories=["fantasy","horror","history","romance","scifi"]
class Home extends Component {
    render(){
        console.log('fantasy books:',fantasy)

    return (
        <Container>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

                <Row>
                {fantasy.map(book=>{
                    return(
                <Col xs={3}>
                <Card >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    ${book.price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </Col>
                    )
                })}
            </Row>
        </Container>
        );
    }
}

export default Home;