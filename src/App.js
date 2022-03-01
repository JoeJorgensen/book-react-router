import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h1>Books App</h1>
     <nav 
     style={{
       border : '2px solid teal'
     }}
     >
       <Link to ='/books'>Books</Link> | {''}
       <Link to ='/about'>About</Link> | {''}
       <Link to ='/new_book'>New Book</Link>

     </nav>
     <Outlet/>
    </div>
  );
}

export default App;
