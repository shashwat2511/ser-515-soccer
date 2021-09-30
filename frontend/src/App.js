import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Container from './components/Container.js';
import Footer from './components/Footer.js';

function App() {
  var app = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100vw',
    height: '100vh'
  }

  return (
    <div style={app}>
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
