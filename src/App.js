import React, { Component } from "react";
import  { GlobalStyle } from "./GlobalStyle"; 
import { ThemeProvider } from "styled-components";
import { darkTheme, LigthTheme } from './Temas';
import Toggle from './Toggle';
import './App.css';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = { 
      inputText: "",
      theme: "Branco",
    };
  }

  searchBoxHandler(data) {
    this.setState({
      inputText: data
    });
  }

  toggleTheme = () => {
    if (this.state.theme == 'Branco') {
      this.setState({
        inputText: this.state.imputText,
        theme: 'Escuro',
      });
    } else {
      this.setState({
        inputText: this.state.imputText,
        theme: 'Branco',
      });  
    }
  }

  render() {
    return (
      <ThemeProvider theme = {this.state.theme === 'Escuro' ? darkTheme : LigthTheme}>
        <GlobalStyle/>
        <div className="App">
          <form>
             <h1 className="texto">Sign up to my newsletter</h1>
             <p></p>
             <input type="text" placeholder="my@email.com"></input>
             <button  className="button">Sign up</button>
             <p></p>
          </form>

          <Toggle themeLabel = {this.state.theme} toggleTheme={this.toggleTheme}/>
        </div>
      </ThemeProvider>    
    );
  }  
}

export default App;
