import React from 'react';
import {Link} from 'react-router-dom';

import product from '../apis/product';

import { Container, Row, Col, Button} from 'react-bootstrap';
import './ProductList.css'
import { getAllProducts } from '../actions';
import { connect } from 'react-redux';


class ProductList extends React.Component{

    state = {products: []}

    componentDidMount = () =>{
       this.props.getAllProducts()
 
        
    }


    renderList = () =>{
        return this.props.products.map(product =>{
            return(
                
                    <Col key={product.id} md={6} xs={12} style={{padding:"30px"}}><img src ={product.image} width="100px" height="100px"></img><br></br>
                    <label>{product.name}</label><br></br>
                    <label>Price:{`${product.price} INR`}</label><br></br>
                    <Link to={`/product/${product.id}`} className="btn add">Add to Cart</Link>
                    </Col>

                
            )
        })
    }

    render(){

        return(
            <div>
                <Container>
                    <Row style = {{height: "500px", width:"100%"}}>
                        {this.renderList()} 
                    </Row>
                </Container>
                
            </div>
        )
    }
};

const mapStateToProps = state =>{
    
    return{
        products: state.products
    }
}

export default connect(mapStateToProps, {getAllProducts})(ProductList);