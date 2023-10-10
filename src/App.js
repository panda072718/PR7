import React, { useState } from "react";
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
import CommentList from "./PR6/CommentList";
import CommentForm from "./PR6/CommentForm";
import FormExample from "./Localsstorage/FormExample";
const App = () => {

  // const [comments, setComments] = useState([]);

  // const addComment = (comment) => {
    
  //   setComments([...comments, comment]);
  // };
  return (
    <>
      {/* PR5 */}
{/* 
       <div className="App">
       <CountdownTimer initialTime={60} /> 
     </div>  */}

      {/* Website PR3 */}
      {/* <Header />
      <About />
      <Count />
      <Services />
      <Menu />
      <Chef />
      <Reservation />
      <Customer />
      <Footer /> */}


      {/* PR6 */}

      {/* <div className="App">
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} />
    </div> */}




            {/* local storage */}

            <FormExample/>  
    </>
  );
};

export default App;