import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import './LandingPage.css';

const Section = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          NUFFSAID Software LLC
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Modern Solutions for Modern Problems
        </motion.p>
      </header>

      <main className="content-sections">
        <Section>
          <div className="section">
            <h2>About Us</h2>
            <p>
              NUFFSAID Software LLC is a software development company that
              specializes in creating modern and intuitive web applications. We
              are passionate about technology and dedicated to delivering
              high-quality solutions that meet the needs of our clients.
            </p>
          </div>
        </Section>

        <Section>
          <div className="section">
            <h2>Our Services</h2>
            <ul>
              <li>Web Application Development</li>
              <li>Mobile Application Development</li>
              <li>UI/UX Design</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>
        </Section>

        <Section>
          <div className="section">
            <h2>Contact Us</h2>
            <p>
              Have a project in mind? We'd love to hear from you.
            </p>
            <a href="mailto:john.adkerson.software@gmail.com" className="contact-link">
              john.adkerson.software@gmail.com
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default LandingPage;