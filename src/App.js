import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import './App.css';
import Header from './components/Header'
import Common from './components/Common'
import RDSToHive from "./components/RDSToHive"
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'


const store = createStore(reducer, middleware)

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <GlobalStyle />
                  <Header />
                  <AppContainer>
                      <Common.Container>
                          <Route path="/" exact component={RDSToHive.Component} />
                          <Route path="/rdstohive/create" exact component={RDSToHive.Component} />
                          <Route path="/rdstohive/select" exact component={RDSToHive.Component} />
                          <Route path="/hivetords/create" exact component={RDSToHive.Component} />
                          <Route path="/hivetords/select" exact component={RDSToHive.Component} />
                      </Common.Container>
                  </AppContainer>
              </div>
          </Router>
      </Provider>

  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;
`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Mono', monospace;
  }
  
  div,textarea {
    box-sizing: border-box;
  }
`

export default App;
