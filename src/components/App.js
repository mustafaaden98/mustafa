import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './ProductList';
import CartPage from './CartPage';


class App extends React.Component{

    
    render(){

        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ProductList}></Route>
                    <Route path="/product/:id" exact component={CartPage}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
};

export default App;