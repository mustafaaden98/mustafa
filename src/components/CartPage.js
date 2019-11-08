import React from 'react';
import { connect } from 'react-redux';
import { getProduct} from '../actions';

import {Container, Row, Col} from 'react-bootstrap';


class CartPage extends React.Component{

    state = { qty:1, price:0}

    componentDidMount = () =>{
        this.props.getProduct(this.props.match.params.id)
  
        console.log(this.inputRef)
   
    }

    onChange = (e) =>{
        const qty = e.target.name === 'qty'? e.target.value: '0';
        
        const price = this.props.product ? this.props.product.price: this.state.price
        const netPrice = qty * price;
        this.setState({qty:qty, price:netPrice})
   }

    renderProduct = () =>{
        if(!this.props.product){
            return(
                <div>Loading...</div>
            )
        }
        return(
            
            <Col md={6} style={{ padding:"50px"}}>
                <label style={{fontSize:"20px"}}>{this.props.product.name}</label> <br></br>
                <img src={this.props.product.image} width="200px" height="200px"></img><br></br>
                <label style ={{marginTop:"10px"}}>Qty<input type="text" name="qty" value = {this.state.qty} onChange ={this.onChange} style={{width:"30px"}} required autoComplete="off"></input></label><br></br>
                <label>Price<input type="text" name="price" value = {this.state.price === 0 ? this.props.product.price: this.state.price} onChange = {this.onChange} style={{width:"50px"}} disabled></input></label>

            </Col>
        )
    }
    render(){
        
        return(
            <div>
                <Container>
                    <Row style={{height:"300px"}}>
                        
                        {this.renderProduct()}
                    </Row>

                </Container>
                
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) =>{
    return{
        product: state.product[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {getProduct})(CartPage);