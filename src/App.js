import "./resources/styles.css"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Carrousel from "./components/Carrousel";
import EventDate from "./components/EventDate";
import BandInfo from "./components/BandInfo";
import TourDates from "./components/TourDates";
import Contact from "./components/Contact";

const App = () => {
	return (<div className="App">
    <Header/>
    <Carrousel />
    <EventDate />
    <BandInfo />
    <TourDates/>
    <Contact/>
    <Footer/>
  </div>
  );
};

export default App;
