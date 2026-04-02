import { convertFirtLetterCapital } from '../../utils/functions';
import { menuLinks } from '../../data/data';
import styles from './navlinks.module.css';

const Navlinks = ({ isOnFooter }) => {
  return (
    <div className={styles.navlinks}>
      {menuLinks.map((menulink, index) => (
        <p
          className={isOnFooter ? styles.navlink_footer : styles.navlink}
          key={index}
        >
          {convertFirtLetterCapital(menulink)}
        </p>
      ))}
    </div>
  );
};

export default Navlinks;
