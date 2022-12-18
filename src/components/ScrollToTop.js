import React from 'react'
import { useState } from 'react';
import logo from "../assets/logo.png";
import styles from './ScrollToTop.module.css';


function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);
  const scrollClasses = `${scrollState ? styles.yes : styles.no}`
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <div>
      <div className={`${styles.top} ${scrollClasses}`} onClick={toTop} scrollState={scrollState}>
        <img className={styles.img} src={logo} alt="" />
      </div>
    </div>
  )
}
export default ScrollToTop;