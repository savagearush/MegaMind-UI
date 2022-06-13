import "./App.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
