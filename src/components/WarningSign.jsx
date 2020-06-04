import React, {Component} from "react"
import {Alert,Row} from "react-bootstrap"


class WarningSign extends React.Component {
    render(){
    return (
    <>
        {this.props.bookSelected &&    <Row>
            <Alert variant="danger">
            {this.props.bookSelected.title}
            </Alert>
            </Row>}
     

  
    </>
   )
  }
}
  export default WarningSign