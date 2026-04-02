import styles from './navbar.module.css';
import Navlinks from '../Navlinks';
import Logo from '../Logo';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo isOnFooter={false} />
      <Navlinks isOnFooter={false} />
    </nav>
  );
};

export default Navbar;
