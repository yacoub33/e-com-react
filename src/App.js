import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Highlighs from "./components/Highlighs";
import Landing from "./components/Landing";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlighs />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
