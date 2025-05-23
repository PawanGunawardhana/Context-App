import React, { createContext, Component } from "react";

export const AuthContext = createContext(); //createContext eken AuthContext kiyana context ekak hadanawa.
// AuthContext kiyana context eka use karala app eke authentication eka manage karanna puluwan.

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };
  toggleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
 