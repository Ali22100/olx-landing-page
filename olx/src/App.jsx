import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from 'react-bootstrap/Button';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import { productData } from "./Components/data";
import CategoryCards from "./Components/MiniCard/MiniCard";
import FooterSec from "./Components/Footer 2/Footer2";
import FooterThree from "./Components/Footer3/Footer3";

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
       <Header />
      
     <Slider />
     <CategoryCards/>
      <h1>Just For You</h1>
     <div className="sectionOne">
      {/* Product Cards Section */}
      <div className="cardDiv"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        
        {productData.map((item,i) => (
          <Cards
            key={item.id}
            imgSrc={item.image}
            title={item.title}
            desc={item.description}
            price={item.price}
            rating={item.rating.rate}
            ratingCount={item.rating.count}
          />
        ))}
       
      </div>
     <Button className="btnSecond" variant="outline-primary">LOAD MORE</Button>

      </div>
      <Footer/>
      {/* <FooterSec/>
     <FooterThree/> */}
    </div>
    </>
  );
}

export default App;
