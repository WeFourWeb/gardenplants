import React from 'react';
import { Route } from 'react-router-dom';
import AuthorisationPage from './components/authorisation/authorisation';
import MainPage from './components/main_page/main_page';

function App() {
  return (
    <div className="App">
      <Route path="/main_page" render = { () => <MainPage/>}/>
      <Route exact path="/" render = { () => <AuthorisationPage/>}/>
    </div>
  );
}

export default App;
