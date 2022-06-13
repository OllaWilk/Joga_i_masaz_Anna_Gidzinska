import React from 'react';
import { Link } from 'react-scroll';

import "./Header.scss";



const Header = () => {
  
  return (
    <header id='home' className="app__header" >
      <div className="app__header-spaceing">
        <h1 >
        <span> joga & masaż </span>  <br/>
          ciała & umysłu
        </h1>
        <h2> Dobrostan, równowaga <br/>
          wzmocnienie naturalnie, <br/>
          holistycznie, transpersonalnie, <br/>
          tradycyjnie i na miarę naszych czasów.</h2>
        <Link to='kontakt' className='btn header-btn'>Zamów</Link>
      </div> 
    </header>
  )
}

export default Header