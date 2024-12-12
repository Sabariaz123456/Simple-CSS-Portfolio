// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
 
   <>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
   

     

      <div className={styles.hero}>
        <h1>Welcome to My Portfolio</h1>
        <p>I am a passionate developer who loves building amazing web applications.</p>
      </div>

      <section className={styles.projects}>
        <h2>My Projects</h2>
        <div className={styles.projectList}>
          <div className={styles.projectCard}>
            <img src="/images/project1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>A brief description of Project 1.</p>
            <a href="#">View Project</a>
          </div>
          <div className={styles.projectCard}>
            <img src="/images/project2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>A brief description of Project 2.</p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>

  
    </>
  );
}
