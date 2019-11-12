import React from 'react';
import styled from 'styled-components'
import './App.css';
import Header from './components/Header'
import Common from './components/Common'

function App() {
  return (
    <div className="App">
      <Header />
      <AppContainer>
        <Common.SideMenu />

      </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;
`

export default App;
