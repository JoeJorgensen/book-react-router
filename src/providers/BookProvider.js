import axios from "axios";
import React, {useState} from "react";

export const DataContext = React.createContext();

const DataProvider = (props)=>{
    const [books, setBooks] = useState([{id:23456, title: 'Moby Dick'}]);
    const [demoState, setDemoState] = useState('This is the demoState');
    const [error, setError] = useState(null);

    const getBooks = async () =>{
        try {
        let res = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
        setBooks(res.data);
    }   catch(err) {
            setError('Error Occurred')
        }
        
    };
    console.log('books', getBooks)
    const addBook = (book) => {
        let newBooks = [...books, book]
        setBooks(newBooks)

    }

    const updateBook = (book) =>{
        let updatedBook = books.map(b => b.id === book.id ? book.id : b.id)
        setBooks(updatedBook)
    }
    

    const deleteBook = (book) => {
        let deletedBook = books.filter((b)=> b.id !== book.id )
        setBooks(deletedBook)
    }


    const dataProviderThing = 
    {
    books, 
    demoState, 
    x:1,
    setDemoState,
    addBook, 
    updateBook, 
    deleteBook,
    getBooks,
    error,


    };
    return (
    <DataContext.Provider value = {dataProviderThing}>
        {props.children}
    </DataContext.Provider>

    );
};

export default DataProvider;