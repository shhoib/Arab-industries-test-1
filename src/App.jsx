// import SideBar from "./components/sidebar/sideBar"
// import MainContent from "./components/mainContent/mainContent"
// import Navbar from "./components/Navbar/navbar"

// function App() {

//   return (
//     <div className="App">
//       <Navbar/>
//       <div className="d-flex">
//       <SideBar/>
//       <MainContent/>
//       </div>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import SideBar from './components/sidebar/sideBar';
import MainContent from './components/mainContent/mainContent';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="d-flex">
        <SideBar visible={sidebarVisible} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
