import React from 'react';
import 'antd/dist/antd.css';

import { Route } from 'react-router-dom';
import AuthorisationPage from './pages/authorisation_page';
import MainPage from './pages/main_page';



function App() {
  return (
    <div className="App">
      <Route path="/main_page" render = { () => <MainPage/>}/>
      <Route exact path="/" render = { () => <AuthorisationPage/>}/>
    </div>
  );
}

export default App;
