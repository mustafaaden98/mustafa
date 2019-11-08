import React from 'react';
import {Link} from 'react-router-dom';

import product from '../apis/product';

import { Container, Row, Col, Button} from 'react-bootstrap';
import './ProductList.css'



class ProductList extends React.Component{

    state = {products: []}

    componentDidMount = () =>{
       this.getAllProducts()
        
    }

    async getAllProducts(){
        const response = await product.get('/product');
        // console.log(response)

        this.setState({products: response.data})
        
    }

    renderList = () =>{
        return this.state.products.map(product =>{
            return(
                
                    <Col key={product.id} md={6} xs={12} style={{padding:"30px"}}><img src ={product.image} width="100px" height="100px"></img><br></br>
                    <label>{product.name}</label><br></br>
                    <label>Price:{`${product.price} INR`}</label><br></br>
                    <Link to={`/product/${product.id}`} className="btn add">Add to Cart</Link>
                    </Col>
 
                    // {/* <img src = {product.image} width = "100px"></img> <br></br>
                    // <label>{product.name}</label> */}
                
            )
        })
    }

    render(){
        // console.log(this.props.match.params.id)
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


export default ProductList;