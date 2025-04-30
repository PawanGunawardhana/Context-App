import React, { createContext, useState } from "react";

export const BookContext = createContext();

// use props as parameter.
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Madol Duwa", id: 1 },
    { title: "Sherlok Holmes", id: 2 },
    { title: "Hathpana", id: 3 },
    { title: "Heen Saraya", id: 4 },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
