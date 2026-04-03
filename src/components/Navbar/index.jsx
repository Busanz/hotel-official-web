import styles from './navbar.module.css';
import Navlinks from '../Navlinks';
import Logo from '../Logo';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = ({ setSelectPageOnNav, activePage }) => {
  return (
    <nav className={styles.navbar}>
      <Logo isOnFooter={false} setSelectLogo={setSelectPageOnNav} />
      <Navlinks
        isOnFooter={false}
        setSelectNavLink={setSelectPageOnNav}
        activePage={activePage}
        className={styles.nav_links}
      />
      <RxHamburgerMenu className={styles.mobile_menu} size={52} />
    </nav>
  );
};

export default Navbar;
