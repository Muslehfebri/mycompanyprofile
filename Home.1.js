import React from 'react';

export const Home = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="lo.png" alt="Company Logo">
                        <span>PT Jiwa Jawa Construction</span>
                    </></div>
                <nav>
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="#teams">Teams</a></li>
                    </ul>
                </nav>
            </header>


            <section id="home">
                <div className="hero">
                    <img src="./omah.png" alt="Company Hero Image" />
                    <div className="hero-content">
                        <h1 className="company-name">PT Jiwa Jawa</h1>
                        <a href="about.html" className="btn">Learn More</a>
                    </div>
                </div>
            </section>


            <footer>
                <p>&copy; 2023 PT Jiwa Jawa. All rights reserved.</p>
            </footer>
        </div>

    );
};
