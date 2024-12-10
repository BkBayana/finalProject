import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacts from '../pages/Contacts';

const App=() => {
  return (
    <>
     
      <div className='main-container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contacts' element={<Contacts />} />
          </Routes>
          <Footer/>
      </div>
     
    </>
  );
}

export default App;   