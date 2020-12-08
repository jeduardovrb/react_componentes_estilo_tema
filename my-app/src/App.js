import React from 'react';
import {ThemeProvider} from "styled-components";
import './App.css';
import { darkTheme, LigthTheme } from './Temas';
import  {GlobalStyle, GlobalStyles} from "./GlobalStyle"; 

function App() {
  return (
    <ThemeProvider theme = {LigthTheme}>
      <GlobalStyle/>
      <div className="App">
        <form>
           <h1 className="texto">Sign up to my newsletter</h1>
           <p></p>
            <input type="text" placeholder="my@email.com"></input>
            <button  className="button">Sign up</button>
        </form>
      </div>
    </ThemeProvider>  
  );
}

export default App;
