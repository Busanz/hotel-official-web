import styles from './logo.module.css';

const Logo = () => {
  return (
    <div>
      <span className={styles.logo_beach}>Beach</span>
      <span className={styles.logo_heaven}>Heaven</span>
    </div>
  );
};

export default Logo;
