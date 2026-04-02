import CTA from '../CTA';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <main className={styles.hero}>
      <p className={styles.hero_welcome}>Welcome to</p>
      <h1 className={styles.hero_title}>Beach Heaven Hotel</h1>
      <p className={styles.hero_description}>
        Where timeless elegance meets modern comfort in sea beast. Experience
        hospitality that feels like home only better.
      </p>
      <CTA />
    </main>
  );
};

export default Hero;
