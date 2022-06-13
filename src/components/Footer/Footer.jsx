import React from 'react';
import Logo from '../../img/Vector.svg';
import css from './footer.module.css';


const Footer = () => {
  return (
    <footer>
      <div className={css.logo}>
        <img src={Logo} alt="pic" />
        <p>ounter</p>
      </div>
      <div className={css.footerMenu}>
        <a href="#0">Партнерам</a>
        <a href="#0">Разработчикам</a>
        <a href="#0">Вакансии</a>
      </div>
      <div className={css.intoCode}>ООО "интукод", 2020г.</div>
    </footer>
  );
};

export default Footer