import SideBar from "./components/sidebar/sideBar"
import MainContent from "./components/mainContent/mainContent"
import Navbar from "./components/Navbar/navbar"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="d-flex">
      <SideBar/>
      <MainContent/>
      </div>
    </div>
  )
}

export default App
