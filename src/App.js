import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import './App.css';
import Header from './components/Header'
import Common from './components/Common'
import RDSToHive from "./components/RDSToHive"

function App() {
  return (
    <Router>
        <div className="App">
            <Header />
            <AppContainer>
                <Common.Container>
                    <Route path="/" exact component={RDSToHive.Component} />
                </Common.Container>
            </AppContainer>
        </div>
    </Router>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;
`

export default App;
