import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const [activeLang, setActiveLang] = useState('EN');

  const handleLangChange = (lang) => {
    setActiveLang(lang);
  };

  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li><a href="Product">Product</a></li>
        <li><a href="Sales">Sales</a></li>
        <li><a href="Store">Store</a></li>
        <li><a href="Support">Support</a></li>
      </ul>

    <div className='iconGroup'>
        <div className='languageSwitcher'>
        <button 
            className={activeLang === 'EN' ? 'active' : ''}
            onClick={() => handleLangChange('EN')}
        >EN</button>
        <span>|</span>
        <button 
            className={activeLang === 'VN' ? 'active' : ''}
            onClick={() => handleLangChange('VN')}
        >VN</button>
        </div>

        <button className='cartButton'>
            <FiShoppingCart size={16}/>
        </button>
    </div>


    </nav>
  )
}

export default Navbar