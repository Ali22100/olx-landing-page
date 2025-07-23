import React from 'react';
import './Footer3.css'; // Optional if you want external CSS

const FooterThree = () => {
  const handleIconClick = (platform) => {
    alert(`Redirecting to ${platform}...`);
    // window.open(`https://example.com/${platform}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Daraz International</h4>
        <div className="countries">
          <span><img src="https://img.lazcdn.com/us/domino/1fe7d756-2469-4d8e-82b2-d5eb7cbad875_PK-84-84.png" alt="Pakistan" /> Pakistan</span>
          <span><img src="https://img.lazcdn.com/us/domino/05a4ef2c-095c-407d-9295-aa45b5412de0_PK-84-84.png" alt="Bangladesh" /> Bangladesh</span>
          <span><img src="https://img.lazcdn.com/us/domino/5536488d-c32a-44eb-8307-ed6651d907da_PK-84-84.png" alt="Sri Lanka" /> Sri Lanka</span>
          <span><img src="https://img.lazcdn.com/us/domino/8896f696-b36f-4cb1-8576-2e86eed05046_PK-84-84.png" alt="Myanmar" /> Myanmar</span>
          <span><img src="https://img.lazcdn.com/us/domino/39f7f111-619f-47cd-993c-a551aaed15fd_PK-86-86.png" alt="Nepal" /> Nepal</span>
        </div>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="socials">
          <img src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01Wdetn224xMIRNihao_!!6000000007457-2-tps-34-34.png" alt="Facebook" onClick={() => handleIconClick('Facebook')} />
          <img src="https://img.lazcdn.com/us/domino/53d2eeea-55ed-4da7-99d6-31f9814b8e3e_PK-75-76.png" alt="X" onClick={() => handleIconClick('X')} />
          <img src="https://img.lazcdn.com/us/domino/f03a43e7-3655-4049-8c12-b1614ac2a2d4_PK-75-76.png" alt="Instagram" onClick={() => handleIconClick('Instagram')} />
          <img src="https://img.lazcdn.com/us/domino/6bf9555a-40ae-466d-a756-907f70aa3461_PK-76-76.png" alt="YouTube" onClick={() => handleIconClick('YouTube')} />
          <img src="https://img.lazcdn.com/us/domino/cea1aedb-aa69-44d5-bbaf-ca5901797dea_PK-76-76.png" alt="Website" onClick={() => handleIconClick('Website')} />
        </div>
      </div>

      <div className="footer-right">
        <p>© Daraz 2025</p>
      </div>
    </footer>
  );
};

export default FooterThree;
