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
// import CommentForm from "./PR6/CommentForm";
import FormExample from "./Localsstorage/FormExample";
import RegistrationForm from "./PR8/RegistrationForm";
import Navbar from "./PR8/Navbar";
import SingUp from "./PR8/SingUp";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './PR8 Routing/Navbar';
import Home from './PR8 Routing/Home';
import Students from './PR8 Routing/Students';
import StudentDetail from './PR8 Routing/StudentDetail';
import Page404 from './PR8 Routing/Page404';
import EditStudent from './PR8 Routing/EditStudent';
import AddStudent from './PR8 Routing/AddStudent';
import Login from './PR8 Routing/Login';
import Signup from './PR8 Routing/Signup';
import ProductSearch from "./Test 2/ProductSearch";
import { Sidebar } from "./Test 2/Sidebar";

const App = () => {
  // const [comments, setComments] = useState([]);

  // const addComment = (comment) => {

  //   setComments([...comments, comment]);
  // };
  const products = [
      {
        name: "iphone 13",
        color: "blue",
        type: "iphone",
        img: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg"
      },
      {
        name: "iphone 14",
        color: "white",
        type: "iphone",
        img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"
      },
      {
        name: "Samsung filp",
        color: "black",
        type: "samsung",
        img: "https://m.media-amazon.com/images/I/417rGDOfx8L._SX300_SY300_QL70_FMwebp_.jpg"
      },
      {
        name: "Samsung s23 ultra",
        color: "green",
        type: "samsung",
        img: "https://m.media-amazon.com/images/I/51hqXIAVXAL._SX679_.jpg"
      }
        
  ]
  const [activeUser ,setActiveUser]=useState(true)
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

      {/* <FormExample />   */}

      {/* PR8 */}
      {/* <Navbar /> */}
      {/* <RegistrationForm /> */}
      {/* <SingUp/> */}
      
      {/* <BrowserRouter>
        <Navbar activeUser={activeUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Students />} />
          <Route path="/student/edit/:id" element={<EditStudent />} />
          <Route path="/student/view/:id" element={<StudentDetail />} />
          <Route path="/student/addstudent" element={<AddStudent />} />
          <Route
            path="/login"
            element={
              <Login activeUser={activeUser} setActiveUser={setActiveUser} />
            }
          />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter> */}

      {/* Test-2 */}
      {/* <div className="flex-1 px-6">
        <Sidebar
          handleSearch={handleSearch}
          input={input}
          setInput={setInput}
          handleType={handleType}
        />
      </div> */}
      <ProductSearch products={products}/>
    </>
  );
};

export default App;
