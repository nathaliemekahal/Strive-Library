import React from 'react';
import { Card, Button,Form} from 'react-bootstrap'


class Commentt extends React.Component{
  constructor(props){
    super(props)
    this.state={
     review:{
      comment : '',
      rate :'',
      elementId: ''
     },
     reviews:''
    }
  }

  getComms = async() =>{
    let asin = (this.state.review['elementId'])
    console.log(asin)
      let response = await fetch(' https://striveschool.herokuapp.com/api/comments/'+asin,{
        method :'GET',
        headers : new Headers({
          'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
          // 'Content-type': "application/json"
        })
      })
      let parsedJson = await response.json()
      this.setState({reviews:parsedJson})
     }

  updateReview =(event)=>{
    let review = this.state.review
    review['elementId'] = this.props.book.asin
    let currentId = event.currentTarget.id
    if(currentId === 'comment' ){
      review[currentId] = event.currentTarget.value
    }else if(currentId === 'rate' ){
      review[currentId] = parseInt(event.currentTarget.value)
    }
    this.setState({review : review})

  }

  sendComms = async() =>{
    try{
      let response = await fetch('https://striveschool.herokuapp.com/api/comments/',{
        method :'POST',
        body: JSON.stringify(this.state.review),
        headers : new Headers({
          'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU=',
          'Content-type': "application/json"
        })
      })
      if(response.ok){
        alert('added')
        this.getComms()
      }
    }
    catch(error){
      console.log(error)
    }
   }

  render(){
    return(
      <>
      {this.props.book && 
      <Card style={{ width: '18rem' }}  >
        <Card.Img variant="top" src={this.props.book.img}/>
        <Card.Body>

        <Form  >
        <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text" placeholder="Rating" id='rate'  onChange={this.updateReview} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Review</Form.Label>
            <Form.Control type="text" placeholder="Write a Review" id='comment'  onChange={this.updateReview} />
          </Form.Group>         
          <Button variant="primary" onClick ={this.sendComms}  >
            Submit
          </Button>
        </Form>
        
        <h6>Reviews</h6>
          
        </Card.Body>
      </Card>
      }
     
     
      </>
    )
  }
}

export default Commentt

// onClick={this.getComms(this.props.book.asin)}