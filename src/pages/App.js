import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacts from '../pages/Contacts';
import Attendance from './Attendance';
import Example from './Example';
import Show from './Show';

const App=() => {
  return (
    <>
     
      <div className='main-container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/show' element={<Show />} />
          {/* <Route path='/example' element={<Main />} /> */}
          </Routes>
          <Footer/>
      </div>
     
    </>
  );
}

export default App;   