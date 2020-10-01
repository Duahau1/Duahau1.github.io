import React,{useState} from 'react';
import Tweet from './tweet';
import Nav from './nav';
import About from './About';
import Item from './itemdetail';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
function App (){
  const home =()=>{
    return (
    <div>
      <h1>Home page</h1>
    </div>
    )
  }
  return (
    <Router>
    <div>
      <h1>This is my React page</h1>
    
      <Nav />
      <Switch>
      <Route path='/' exact component={home}/>
      <Route path='/about' component={About}/>
      <Route path='/tweet' exact component ={()=><Tweet name="QBT" message="Toi thich KXY" />}/>
      <Route path="/tweet/:id" component={Item}/>
      </Switch>
    </div>
    </Router>
  )
}

export default App;