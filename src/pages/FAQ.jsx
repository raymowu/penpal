import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../img/logo.png';

function FAQPage() {
  return (
    <div className="faq-page">
      <img src={logo} alt="PenPal Connect Logo" className="logoImage" style={{ width: '50px', height: 'auto' }}/>
        <h1 className="title"> PenPal Connect FAQ</h1>
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>
      <div className="faq-item" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px'}}>
        <div className="question" style={{fontWeight: 'bold', color: '#333'}}>What is PenPal Connect?</div>
        <div className="answer" style={{color: '#666'}}>PenPal Connect is a safe and fun penpal app designed specifically for kids to connect with other children around the world.</div>
      </div>
      <div className="faq-item" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px'}}>
        <div className="question" style={{fontWeight: 'bold', color: '#333'}}>Is PenPal Connect safe for my child to use?</div>
        <div className="answer" style={{color: '#666'}}>Absolutely! Safety is our top priority at PenPal Connect. We have stringent measures in place to ensure that all interactions on our platform are safe and monitored.</div>
      </div>
      <div className="faq-item" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px'}}>
        <div className="question" style={{fontWeight: 'bold', color: '#333'}}>Can my child use PenPal Connect independently?</div>
        <div className="answer" style={{color: '#666'}}>Yes, PenPal Connect is designed to be kid-friendly and intuitive to use. However, we recommend parental supervision, especially for younger children.</div>
      </div>
      <div className="faq-item" style={{backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px'}}>
        <div className="question" style={{fontWeight: 'bold', color: '#333'}}>Is PenPal Connect available in multiple languages?</div>
        <div className="answer" style={{color: '#666'}}>Yes, it is available in 5 different languages!</div>
      </div>
      {/* Other FAQ items */}
    </div>
  );
}

export default FAQPage;
