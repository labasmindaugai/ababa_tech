import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from './public/log-In-page';
// import MainPage from './auth/main-page';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogInPage/>}></Route>
      {/* <Route path="/main" element={<MainPage/>}></Route> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
