import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/footer';
import HomePage from './pages/homepage';
import About from './pages/about';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      title: 'Van Nguyen',
      headerLink :[
        {title:'Home',path:'/'},
        {title:'About',path:'/About'},
      ],
      home:{
        title:`Duahau's repository`,
        subtitle:'Projects that made a difference',
        text:'Checkout my projects below'
      },
      about:{
        title:'About me'
      }
    }
  }
  render() {
    return (
    <Router>
      <Container className="p-0" fluid={true}>
      <Navbar className="border-bottom"  expand="lg">
      <Navbar.Brand><a href="/" style={{color:'black',textDecoration:'none'}}>Duahau</a></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-toggle"/>
      <Navbar.Collapse id ='navbar-toggle'>
        <Nav className="ml-auto">
          <Link className='nav-link' to ='/'>Home</Link>
          <Link className='nav-link' to ='/About'>About</Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      <Switch>
      <Route path='/' exact component={()=><HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text}/>} />
      <Route path='/About' component={()=><About title={this.state.about.title} />} />
      </Switch>
      <Footer/>
      </Container>
    </Router>

    )
  }
}

export default App;