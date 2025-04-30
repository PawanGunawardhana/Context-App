import React, { createContext, Component } from 'react'

export const ThemeContext = createContext(); //createContext eken ThemeContext kiyana context ekak hadanawa.
// ThemeContext kiyana context eka use karala app eke theme eka manage karanna puluwan.
// ThemeContext.Provider kiyana component ekak use karala app eke theme eka manage karanna puluwan.

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
     } //state kiyana eke tamai apita globally share krnna one data tika include krnne.
    
    toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme})
    
    }
    
    render() { 
        return (// ...this.state eke ... danne athule data spread krnna
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme } }> 
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;