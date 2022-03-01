import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from  'react-router-dom'
import Books from './pages/Books';
import About from './pages/About';
import NewBook from './pages/NewBook';
import DataProvider from './providers/BookProvider';
import Book from './pages/Book';




const NotFound = ()=>{
return <p> path not found</p>
}



ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
          <Route path ='/' element = {<App />}>
          <Route path = '/books' element = {<Books/>}/>
          <Route path = '/books/:id' element = {<Book  />}/>


          <Route path = '/about' element = {<About/>}/>
          <Route  path = '/new_book' element = {<NewBook/>}/>
          <Route  path = '*' element = { <NotFound/> }/>
       </Route>
    </Routes >
   </BrowserRouter>
  </DataProvider>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
