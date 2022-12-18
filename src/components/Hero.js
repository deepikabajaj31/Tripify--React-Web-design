import React from 'react'
import styles from './Hero.module.css';
import homeImage from "../assets/hero.png";
function Hero() {
  return (

    <div className={styles.hero}>
      <div className={styles.background}>
        <img className={styles.img} src={homeImage} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            "The world is a book and those who do not travel read only one page."
          </p>
        </div>
        <div className={styles.search}>
          <div className={styles.container}>
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className={styles.container}>
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className={styles.container}>
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button className={styles.btn}>Explore Now</button>
        </div>
      </div>
    </div>
  )
}
export default Hero;