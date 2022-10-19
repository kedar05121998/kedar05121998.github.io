
// import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/Main';
// import Main from "./components/Main";


function App() {
  // const [load, upadateLoad] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="App" 
    // id={load ? "no-scroll" : "scroll"}
    >
        <NavBar />
     <Main/>
       
      </div>
  );
}

export default App;
