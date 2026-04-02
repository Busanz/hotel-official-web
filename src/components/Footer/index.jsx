import styles from './footer.module.css';
import Logo from '../Logo';
import Navlinks from '../Navlinks';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_overlay}></div>
      <Logo isOnFooter={true} />
      <p className={styles.footer_description}>
        Blending coastal serenity with refined luxury, we craft experiences that
        go beyond a stay bringing you comfort, warmth, and lasting memories.
      </p>
      <Navlinks isOnFooter={true} />
      <p className={styles.footer_reserved}>
        © 2026 BeachHaven Hotel. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
