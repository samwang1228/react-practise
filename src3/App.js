// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Git from './homework4';
import SignInSide from './signn'
import { BrowserRouter,Route,Routes,Router,useRoutes } from 'react-router-dom';
import Header from './login';
function App () {
  return (
  <Routes>
  <Route path="/" element={<Header/>}/>
    <Route path='/about' element={<Git/>} />
  </Routes>
  );
};

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
