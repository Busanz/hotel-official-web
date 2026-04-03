import styles from './navbar.module.css';
import Navlinks from '../Navlinks';
import Logo from '../Logo';

const Navbar = ({ setSelectPageOnNav }) => {
  return (
    <nav className={styles.navbar}>
      <Logo isOnFooter={false} setSelectLogo={setSelectPageOnNav} />
      <Navlinks isOnFooter={false} setSelectNavLink={setSelectPageOnNav} />
    </nav>
  );
};

export default Navbar;
