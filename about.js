import React from 'react';
import styles from 'home.module.css';

function About() {
  return (
    <>
      <div>
        <header className={styles.header}>
          <div className="logo">
            <img src="lo.png" alt="Company Logo" />
            <span> PT Jiwa Jawa Construction </span>
          </div>
          <nav>
            <ul>
              <li><a href="home.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="#teams">Teams</a></li>
            </ul>
          </nav>
        </header>
      </div>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h1>About Us</h1>
          <p>
            PT Jiwa Jawa Properti adalah perusahaan properti yang berdedikasi untuk memberikan solusi properti yang inovatif dan berkualitas.
            Sebagai pemimpin di industri ini, kami telah berhasil menciptakan berbagai proyek properti yang memenuhi standar tertinggi dalam desain, konstruksi, dan pelayanan pelanggan.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2023 PT Jiwa Jawa. All rights reserved.</p>
      </footer>
    </>
  );
}

export default About;
