import React from 'react';
import styles from './MiniCard.module.css';

const categories = [
  { title: 'Mobiles', img: 'https://www.olx.com.pk/assets/mobiles.73f961c6ad58605c032eb7c2cf12aeaa.png' },
  { title: 'Vehicles', img: 'https://www.olx.com.pk/assets/vehicles.354a5ebfb7f21e87991a277dd4b40f4b.png' },
  { title: 'Property For Sale', img: 'https://www.olx.com.pk/assets/property-for-sale.69b01e8dafc182fa3bd469d0ed4fc801.png' },
  { title: 'Property For Rent', img: 'https://www.olx.com.pk/assets/property-for-rent.49f99cc528b9b88da4f33fbe1f0b3346.png' },
  { title: 'Electronics & Home...', img: 'https://www.olx.com.pk/assets/electronics-home-appliances.0a30101e6fd7d9ccc8cd6b85b9b44cee.png' },
  { title: 'Business, Industrial &...', img: 'https://www.olx.com.pk/assets/business-industrial-agriculture.2ec28979a1bde0183c777a0ce51b37c6.png' },
  { title: 'Jobs', img: 'https://www.olx.com.pk/assets/jobs.dc882b8ff65e94850cc12f5abd605420.png' },
  { title: 'Animals', img: 'https://www.olx.com.pk/assets/animals.476fa9caaf88a12dfbcd6db4c8c6f17a.png' },
  { title: 'Furniture & Home Decor', img: 'https://cdn-icons-png.flaticon.com/512/942/942751.png' },
  { title: 'Fashion & Beauty', img: 'https://cdn-icons-png.flaticon.com/512/892/892458.png' },
  { title: 'Books, Sports & Hobbies', img: 'https://www.olx.com.pk/assets/books-sports-hobbies.9406daf905b451fa283048652f414054.png' },
  { title: 'Kids', img: 'https://www.olx.com.pk/assets/kids.5de42a58bc91f81fa22ccc401d7ac285.png' },
];

const CategoryCards = () => {
  return (
    <div  className={styles.cardContainer}>
      {categories.map((cat, index) => (
        <div className={styles.card} key={index}>
          <img width={500} src={cat.img} alt={cat.title} />
          <p>{cat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
