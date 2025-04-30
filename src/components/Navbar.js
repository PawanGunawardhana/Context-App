import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context; //context eka use karanna one nam this.context kiyana property eka use karanna one.
          const theme = isLightTheme ? light : dark; //isLightTheme kiyana property eka true nam light theme eka use karanna one. naththam dark theme eka use karanna one.

          return (
            <nav style={{ color: theme.syntax, background: theme.ui }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
