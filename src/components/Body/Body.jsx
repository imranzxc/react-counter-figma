import React from "react";
import css from './body.module.css';

const body = () => {
  return (
    <main className={css.mainBody}>
    <div className={css.number}>
      140
    </div>
    <div className={css.buttons}>
      <button className={css.firstButton} type="submit">
        Увеличить
      </button>
      <button className={css.secondButton} type="submit">
        Уменьшить
      </button>
      <button className={css.thirdButton} type="submit">
        Сбросить
      </button>
    </div>
    </main>
  )
}

export default body