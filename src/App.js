import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';

class App extends Component {
  render(){
    return (
      <div className="App">
        
          <Router>
            <PageWrapper>
              <Route 
                  exact = {true}
                  path = "/"
                  component = {Home}
              />
              <Route 
                  path = "/about"
                  component = {About}
              />
            </PageWrapper>
          </Router>
        
      </div>
    );
  } 
}

export default App;
