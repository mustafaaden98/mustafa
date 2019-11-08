import React from 'react';
import product from '../apis/product';
import {Container, Row, Col} from 'react-bootstrap';

class CartPage extends React.Component{
    state = {product: {}, qty:1, price:0}
    componentDidMount = () =>{
        this.getProduct()
    }

    async getProduct(){
        const response = await product.get(`/product/${this.props.match.params.id}`)

        // console.log(response.data)

        this.setState({product:response.data, price:response.data.price})

    }
    onChange = (e) =>{
        const qty = e.target.name === 'qty'? e.target.value: '0';
        const netPrice = qty * this.state.product.price;
        

        this.setState({qty:qty, price:netPrice})
    }

    renderProduct = () =>{
        if(!this.state.product){
            return(
                <div>Loading...</div>
            )
        }
        return(
            <Col md={6} style={{ padding:"50px"}}>
                <label style={{fontSize:"20px"}}>{this.state.product.name}</label> <br></br>
                <img src={this.state.product.image} width="200px" height="200px"></img><br></br>
                <label style ={{marginTop:"10px"}}>Qty<input type="text" name="qty" value = {this.state.qty} onChange ={this.onChange} style={{width:"30px"}} required></input></label><br></br>
                <label>Price<input type="text" name="price" value ={this.state.price} onChange = {this.onChange} style={{width:"50px"}} disabled></input></label>

            </Col>
        )
    }
    render(){
        // console.log(this.state.product)
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

export default CartPage;