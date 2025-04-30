import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark; //isLightTheme kiyana property eka true nam light theme eka use karanna one. naththam dark theme eka use karanna one.
        return (
            <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
               <ul>
                <li style={{background: theme.ui}}>Madol Doowa</li>
                <li style={{background: theme.ui}}>Hath Pana</li>
                <li style={{background: theme.ui}}>Heensaraya</li>
               </ul>
            </div>
        );
    }
}
 
export default BookList;