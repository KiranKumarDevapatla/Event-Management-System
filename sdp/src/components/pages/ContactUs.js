import React, { Component } from 'react'
// inject global styles from styled-components. border-sizing, body. 
import { injectGlobal } from 'styled-components'
// holds all components
import Main from './Main'
import { FooterContainer } from './footer'
import img from './ex-8.jpg'




class App extends Component {
  render() {
    return (
      <div>
        
        <img src={img} class="left "  padding= '400px 200px  100px' width="100%" height="80%"></img>
        
        

        <Main />
        <FooterContainer />
      </div>
    );
  }
}

export default App