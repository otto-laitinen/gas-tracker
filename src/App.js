import React, { useState } from 'react'
import Form from './components/Form'
import CarList from './components/CarList'
import { TotalStats } from './components/TotalStats'
import './Form.css'
import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <TotalStats/>
      <Form />
      <CarList/>
    </GlobalProvider>
  );
}

export default App;
