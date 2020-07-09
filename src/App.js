import React, {Component} from 'react';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Blogs from "./blogs";

class App extends React.Component{

  render(){
      return (
        <div>
        <Router>
        <Header/>
        <Container/>
        <Switch>
        <Route path="/bloglinks/:noOfPages" component={Blogs} />
        <Route path="/shop" component={Footer} />
        </Switch>
        </Router>
        <Footer/>
        </div>
      );
    }
}



export default App;
