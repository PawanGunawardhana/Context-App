import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isLightTheme, light, dark } = themeContext; //context eka use karanna one nam this.context kiyana property eka use karanna one.
//               const theme = isLightTheme ? light : dark; //isLightTheme kiyana property eka true nam light theme eka use karanna one. naththam dark theme eka use karanna one.
//                 const { isAuthenticated, toggleAuth} = authContext; //authContext kiyana context eka use karanna one nam this.context kiyana property eka use karanna one.

//               return (
//                 <nav style={{ color: theme.syntax, background: theme.ui }}>
//                       <h1>Context App</h1>
//                       <div onClick={toggleAuth}>{ isAuthenticated?'Logged in':'Logged out'}</div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Navbar;

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ color: theme.syntax, background: theme.ui }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
