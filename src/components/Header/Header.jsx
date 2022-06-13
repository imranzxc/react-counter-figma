import React from 'react';
import img from '../../img/Ellipse.svg';
import css from './header.module.css';

const header = () => {
  return (
    <header>
      <div className={css.icon}>
        <img src={img} alt="logo" />
        <p>ounter</p>
      </div>
      <div className={css.navbar}>
        <div className={css.nav}></div>
        <a href="0#">Главное</a>
        <a href="0#">О нас</a>
        <a href="0#">Контакты</a>
      </div>
    </header>
  );
};
export default header;
