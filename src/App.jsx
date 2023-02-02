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
    <div className="App">
      <Header />
      <Main/>
      <About />
      <Gallerys />      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
