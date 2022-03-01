import { useParams, useLocation } from "react-router-dom"

const Book = () =>{

    let params = useParams()
    let location = useLocation
    return(
        
        <div>
            <h1>Book Page</h1>
            {JSON.stringify(params)}
            {JSON.stringify(location)}
           <h1>Book</h1>
            <h1> {JSON.stringify(location.state)}</h1>
            <h1>Book ID</h1>
            <p>{params.id}</p>

        </div>
    )
}

export default Book