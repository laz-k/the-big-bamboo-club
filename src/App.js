import "./resources/styles.css"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Carrousel from "./components/Carrousel";
import EventDate from "./components/EventDate";
import Information from "./components/Information";
import TourDates from "./components/TourDates";

const App = () => {
	return (<div className="App">
    <Header/>
    <Carrousel />
    <EventDate />
    <Information/>
    <TourDates/>
    <Footer/>
  </div>
  );
};

export default App;
