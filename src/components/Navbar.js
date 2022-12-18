import React from 'react'
import styles from './Navbar.module.css';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../assets/logo.png"
function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const topClasses = `${navbarState ? styles.imply : styles.no}`;
  return (
    <React.Fragment>
      <div className={styles.nav}>
        <div className={styles.brand}>
          <div className={styles.container}>
            <img src={logo} alt="" />
            Tripify
          </div>
          <div className={styles.toggle}>
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>

        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#recommend">Places</a>
          </li>
          <li>
            <a href="#test">Testimonials</a>
          </li>
        </ul>
        <button className={styles.btn}>Connect</button>
      </div>

      {navbarState && <div className={`${styles.response} ${topClasses}`} state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      </div>}
    </React.Fragment>
  )
}


export default Navbar;