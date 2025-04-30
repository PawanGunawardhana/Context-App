import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class ThemeToggle extends Component {
//   static contextType = ThemeContext; //context eka use karanna one nam this.context kiyana property eka use karanna one.

//   render() {
//     const { toggleTheme } = this.context; //context eka use karanna one nam this.context kiyana property eka use karanna one.
//     return (<button onClick={toggleTheme}>Toggle a Theme</button>);
//   }
// }

// export default ThemeToggle;



//useContext hook for accessing context in a functional component.
const ThemeToggle = () => {

  const {toggleTheme} = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>Toggle a Theme</button>
  );
}
 
export default ThemeToggle;