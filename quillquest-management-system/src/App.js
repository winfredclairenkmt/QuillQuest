import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Frontend/Home';
import AddBook from './Frontend/AddBook';
import AddUser from './Frontend/AddUser';
import Checkout from './Frontend/Checkout';
import GetBook from './Frontend/GetBook';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AddBook/>} />
      <Route path='/' element={<AddUser/>} />
      <Route path='/' element={<GetBook/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/' element={<Checkout/>} />

      {/* <Route path='/books/create' element={<CreateBook />} />
      <Route path='/book {s/details/:id' element={<ShowBook />} />  */}
      </Routes>
  )
}
export default App;