// src/Components/Cards/Cards.jsx

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./Cards.module.css";

function Cards({ imgSrc, title, desc, price, rating, ratingCount }) {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={imgSrc} className={styles.img} />
      <Card.Body>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text className={styles.desc}>{desc}</Card.Text>
        <p className={styles.price}>Rs. {price}</p>
        <p className={styles.rating}>60% off</p>
        {/* <Button variant="warning" size="sm">Add to Cart</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cards;
