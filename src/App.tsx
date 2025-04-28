// import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MainCarousal  from './components/MainCarousal';
import {CricketVisual}  from './components/CricketVisual';
import {FifaVisual}     from './components/FifaVisual';
import {NbaVisual}      from './components/NbaVisual';
import {FormCricket}    from './components/FormCricket';
import { FormFifa } from './components/FormFifa';
import {FormNba}        from './components/FormNba';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                element={<MainCarousal />} />
        <Route path="/cricket"         element={<CricketVisual />} />
        <Route path="/fifa"            element={<FifaVisual />} />
        <Route path="/nba"             element={<NbaVisual />} />
        <Route path="/form/cricket"    element={<FormCricket />} />
        <Route path="/form/fifa"       element={<FormFifa />} />
        <Route path="/form/nba"        element={<FormNba />} />
      </Routes>
    </BrowserRouter>
  );
}
