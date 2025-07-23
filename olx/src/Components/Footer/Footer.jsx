import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.footerdivide}>
        {/* App Download Section */}
        <div className={styles.downloadSection}>
          <div className={styles.textAndImage}>
            <p><strong>Find amazing deals on the go.</strong></p>
            <a href="#" className={styles.downloadLink}>Download OLX app now!</a>
            <img
              src="https://www.olx.com.pk/assets/olx-mobile-app.dfa5b83f01c6e269aca19a3faff716a6.webp"
              alt="OLX Mobile App"
              className={styles.mobileAppImg}
            />
          </div>

          <div className={styles.storeIcons}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_(black)_SVG.svg" alt="App Store" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Huawei_AppGallery_badge_EN.svg" alt="AppGallery" />
          </div>
        </div>

        {/* Links Section */}
        <footer className={styles.footer}>
          <div className={styles.topSection}>
            <div className={styles.linksSection}>
              <div>
                <h5>Popular Categories</h5>
                <ul>
                  <li>Cars</li>
                  <li>Flats for rent</li>
                  <li>Mobile Phones</li>
                  <li>Jobs</li>
                </ul>
              </div>
              <div>
                <h5>Trending Searches</h5>
                <ul>
                  <li>Bikes</li>
                  <li>Watches</li>
                  <li>Books</li>
                  <li>Dogs</li>
                </ul>
              </div>
              <div>
                <h5>About Us</h5>
                <ul>
                  <li>About Dubizzle Group</li>
                  <li>OLX Blog</li>
                  <li>Contact Us</li>
                  <li>OLX for Businesses</li>
                </ul>
              </div>
              <div>
                <h5>OLX</h5>
                <ul>
                  <li>Help</li>
                  <li>Sitemap</li>
                  <li>Terms of use</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social icons & button */}
          <div className={styles.centerActions}>
            <div className={styles.socialIcons}>
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="TikTok" />
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Twitter" />
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Instagram" />
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="YouTube" />
            </div>

            <button className={styles.backToTop} onClick={scrollToTop}>⬆ Back to top</button>
          </div>
        </footer>
      </div>

      {/* Bottom copyright */}
      <div className={styles.bottomSection}>
        <p><strong>Classifieds in Pakistan.</strong> © 2006—2025 OLX</p>
      </div>
    </>
  );
};

export default Footer;
