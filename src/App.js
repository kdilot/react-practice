import React from 'react';
import { PosContainer } from 'redux/container';
import { ScoreBoardContainer } from 'redux02/container';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path='/' component={PosContainer} />
      <Route path='/pos' component={PosContainer} />
      <Route path='/score' component={ScoreBoardContainer} />
    </>
  );
}

export default App;
