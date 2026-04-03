import { convertFirtLetterCapital } from '../../utils/functions';
import { menuLinks } from '../../data/data';
import styles from './navlinks.module.css';

const Navlinks = ({ isOnFooter, setSelectNavLink }) => {
  return (
    <div className={styles.navlinks}>
      {menuLinks.map((menulink, index) => (
        <p
          className={isOnFooter ? styles.navlink_footer : styles.navlink}
          key={index}
          onClick={() => {
            setSelectNavLink(menulink);
            window.scrollTo(0, 0);
          }}
        >
          {convertFirtLetterCapital(menulink)}
        </p>
      ))}
    </div>
  );
};

export default Navlinks;
