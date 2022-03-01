import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import DataProvider,{ DataContext }  from "../providers/BookProvider";

const NewBook = ()=>{
    const navigate = useNavigate()
    let data = useContext(DataContext)
    let [title, setTitle] = useState ('')
    let [author, setAuthor] = useState ('')
    let [genre, setGenre] = useState ('')
    let [description, setDescription] = useState ('')



    const submitHandler = (e)=>{
        e.preventDefault()
        let newBook = {id:Math.random(),title, author, genre, description}
        console.log(newBook)

        data.addBook(newBook)

        navigate('/books')
    }


    
    return (
        <div>
            <h1>New books</h1>
            <Link to= '/books'>users page </Link>
            <form onSubmit ={submitHandler}>
                <p>Title</p>
                <input value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <p>Author</p>
                <input value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
                <p>Genre</p>
                <input value={genre} onChange={(e)=>setGenre(e.target.value)}></input>
                <p>Description</p>
                <input value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                <br/>
                <br/>
                <button>Add Book</button>
            

            </form>

        </div>
    )
};

export default NewBook