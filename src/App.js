import "./resources/styles.css"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Carrousel from "./components/Carrousel";
import EventDate from "./components/EventDate";

const App = () => {
	return (<div className="App">
    <Header/>

    <Carrousel />
    <EventDate />
    <div style={{backgroundColor:"yellow", height: "800px"}}></div>
    <div style={{backgroundColor:"green", height: "800px"}}></div>
    <Footer/>
  </div>
  );
};

export default App;
