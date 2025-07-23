import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "./Adds.module.css";

const SummerSaleBanner = () => {
  return (
    <Container className={styles.bannerContainer} fluid="md">
      <Row className={`align-items-center ${styles.bannerRow}`}>
        <Col xs={12} md={9}>
         <img className={styles.bannerImage} src="https://ali22100.github.io/img-div-/Screenshot%202025-07-06%20014020.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default SummerSaleBanner;
