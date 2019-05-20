import React from 'react';
import { PosContainer } from 'redux/container';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Route exact path='/' component={PosContainer} />
     <Route path='/pos' component={PosContainer} />
    </>
  );
}

export default App;
