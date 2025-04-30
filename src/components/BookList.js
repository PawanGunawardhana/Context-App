import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark; //isLightTheme kiyana property eka true nam light theme eka use karanna one. naththam dark theme eka use karanna one.
//         return (
//             <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
//                <ul>
//                 <li style={{background: theme.ui}}>Madol Doowa</li>
//                 <li style={{background: theme.ui}}>Hath Pana</li>
//                 <li style={{background: theme.ui}}>Heensaraya</li>
//                </ul>
//             </div>
//         );
//     }
// }
//export default BookList;

//using useContext hook inside a functional component to access context.
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
