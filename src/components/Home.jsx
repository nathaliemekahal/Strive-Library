import React, {Component} from "react";
import WarningSign from './WarningSign'
import {Container,Row,Col,Card,Button,Dropdown,DropdownButton,Badge} from 'react-bootstrap';


let bookCategories=["fantasy","horror","history","romance","scifi"]
let books={
    fantasy:require("../jsons/fantasy.json"),
    horror:require("../jsons/horror.json"),
    history:require("../jsons/history.json"),
    romance:require("../jsons/romance.json"),
    scifi:require("../jsons/scifi.json")

}
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            bookSelected:null,
            book:books.fantasy.slice(0,12),
            categorySelected:"fantasy",
        }
    }
    
  
    handleDropDownChange=(category)=>{
        this.setState({book:books[category].slice(0,12),categorySelected:category})
    }
    alertBook=(book)=>{
      this.setState({bookSelected:book})
    }
    render(){
       

    return (
        <>
       
        <Container>
        <WarningSign bookSelected={this.state.bookSelected}/>
           <DropdownButton id="dropdown-basic-button" className="mb-3" title={this.state.categorySelected}
           >
           { bookCategories.map((category,index)=> {
               return (
               <Dropdown.Item href="#/action-1" key={`cat-${index}`}  onClick={()=>this.handleDropDownChange(category)}>{category}</Dropdown.Item>
               )
           })}
            </DropdownButton>

                <Row>
                {this.state.book.map(book=>{
                    return(
                <Col xs={3} key={`card-${book.asin}`}>
                <Card onClick={()=>this.alertBook(book)} >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title} <br/><Badge variant="success">F</Badge>{''}</Card.Title>
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
        </>
        );
    }
}

export default Home;