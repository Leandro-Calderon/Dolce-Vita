import {Route,Routes} from 'react-router-dom'

import "./styles/Reset.css"
import "./App.css";

import {
  Header,
  Main,
  About,
  Gallerys,  
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Header />

      <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Gallerys" element={<Gallerys />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
      </Routes>

    </>

  );
}

export default App;
