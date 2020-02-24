import React, { useReducer, createContext } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [
        { id: 1,
         title: 'Things Fall Aprt',
         author: 'Chinua Achebe'},
         { id: 2,
          title: 'Recipe for Disaster',
          author: 'Rosemary Angidde'},
     ])


    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;