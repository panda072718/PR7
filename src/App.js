import React from "react";
// import Filter from './demo/Filter'
import Project from "./PR4/Project";
import CountdownTimer from "./PR5/CountdownTimer";
// import Card from "./PR4/Card";
import Header from "./PR3/components/Header";
import About from "./PR3/components/About";
import Count from "./PR3/components/Count";
import Services from "./PR3/components/Services";
import Menu from "./PR3/components/Menu";
import Chef from "./PR3/components/Chef";
import Reservation from "./PR3/components/Reservation";
import Customer from "./PR3/components/Customer";
import Footer from "./PR3/components/Footer";
const App = () => {
  return (
    <>
      {/* PR5 */}

      {/* <div className="App">
       <CountdownTimer initialTime={60} /> 
     </div>  */}

      {/* Website PR# */}
      <Header />
      <About />
      <Count />
      <Services />
      <Menu />
      <Chef />
      <Reservation />
      <Customer />
      <Footer />

    </>
  );
};

export default App;
