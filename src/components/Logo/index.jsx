import styles from './logo.module.css';

const Logo = ({ isOnFooter }) => {
  return (
    <div className={isOnFooter ? styles.logo_footer : styles.logo}>
      <span
        className={isOnFooter ? styles.logo_beach_footer : styles.logo_beach}
      >
        Beach
      </span>
      <span
        className={isOnFooter ? styles.logo_heaven_footer : styles.logo_heaven}
      >
        Heaven
      </span>
    </div>
  );
};

export default Logo;
