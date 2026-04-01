import styles from './navbar.module.css';
import { menuLinks } from '../../data/data';
import Logo from '../Logo';
import { convertFirtLetterCapital } from '../../utils/functions';
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Logo />
        <div className={styles.navlinks}>
          {menuLinks.map((menulink, index) => (
            <p className={styles.navlink} key={index}>
              {convertFirtLetterCapital(menulink)}
            </p>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
