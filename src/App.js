import Carousel from "./components/Carousel";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

const App = () => {

  return (
    <>
      <Navigation />
      <Home/>
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
