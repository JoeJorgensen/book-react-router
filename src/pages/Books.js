import { DataContext } from "../providers/BookProvider"
import { useContext } from "react"
import { Link } from "react-router-dom"
const Books = () =>{


    const data = useContext(DataContext)
    return (
        <div>
            <h1>Books Page</h1>

            <Link to = '/new_book'>List a New Book</Link>


            <br/>
            <br/>
            <button onClick={()=>data.setDemoState('changed in Books')}>Change Text</button>
            {/* <p>{data.demoState}</p> */}                       
            {data.books.map(b=>{
                return(
                    <div key ={b.id}>
                        <h1> {b.title} </h1> 
                        <br/>
                  
                        <button onClick={()=>{data.deleteBook(b.id)}}>Delete</button>
                        <br/>
                        <br/>
                        <Link to = {`/books/${b.title}  || ID: ${b.id} `} state={b}>Show Book</Link>
                        </div>
                )

            })}
            <br/>
            <br/>
           <button onClick={data.getBooks}>Get Books</button>
          
            <br/>
            {/* {JSON.stringify(data)} */}
            <br/>
   
        </div>
    )
}

export default Books