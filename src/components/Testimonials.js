import React from 'react'
import styles from './Testimonials.module.css';
import avatarImage from "../assets/avatarImage.jpeg";
function Testimonials() {
  return (
    <React.Fragment>
      <div className={styles.test}>
        <div className={styles.title}>
          <h2>Happy Customers</h2>
        </div>
        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              asperiores eaque.
            </p>
            <div className={styles.info}>
              <img src={avatarImage} alt="" />
              <div className={styles.details}>
                <h4>Anubhav Sharma</h4>
                <span>CEO - Shashaan Web Solutions</span>
              </div>
            </div>
          </div>
          <div className={styles.testimonial}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              asperiores eaque.
            </p>
            <div className={styles.info}>
              <img src={avatarImage} alt="" />
              <div className={styles.details}>
                <h4>Anubhav Sharma</h4>
                <span>CEO - Shashaan Web Solutions</span>
              </div>
            </div>
          </div>
          <div className={styles.testimonial}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
              asperiores eaque.
            </p>
            <div className={styles.info}>
              <img src={avatarImage} alt="" />
              <div className={styles.details}>
                <h4>Anubhav Sharma</h4>
                <span>CEO - Shashaan Web Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Testimonials;