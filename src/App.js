import "./resources/styles.css"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Carrousel from "./components/Carrousel";
import EventDate from "./components/EventDate";
import Highlights from "./components/Highlights";
import Information from "./components/Information";

const App = () => {
	return (<div className="App">
    <Header/>
    <Carrousel />
    <EventDate />
    <Information/>
    <Highlights/>
    <div style={{backgroundColor:"green", height: "800px"}}></div>
    <Footer/>
  </div>
  );
};

export default App;
