import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import styles from "./Slider.module.css";


const Banner = () => {
  const sliderImages = [
    "https://images.olx.com.pk/thumbnails/527654309-800x600.webp",
     "https://images.olx.com.pk/thumbnails/527654309-800x600.webp"
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.heroBanner}>
      <div className={styles.wrapper}>
        <Row className="g-3 flex-wrap flex-md-nowrap">
          <Col lg={12} xs={12} className={styles.sliderWrapper}>
            <Carousel fade className={styles.carousel}>
              {sliderImages.map((src, index) => (
                <Carousel.Item key={index}>
                  <img 
                  
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className={styles.fullIage}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Banner;
