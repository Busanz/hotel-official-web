import styles from './navbar.module.css';
import Navlinks from '../Navlinks';
import Logo from '../Logo';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

const Navbar = ({ setSelectPageOnNav, activePage }) => {
  const [mobileActive, setMobileActive] = useState(false);
  const [hideNavLinks, setHideNavLinks] = useState(true);

  const handleClick = () => {
    const scrolling = !mobileActive;
    setMobileActive(scrolling);

    const root = document.querySelector('#root');
    scrolling && root
      ? root.classList.add('stop_scrolling')
      : root.classList.remove('stop_scrolling');
  };

  return (
    <nav className={styles.navbar}>
      <Logo isOnFooter={false} setSelectLogo={setSelectPageOnNav} />
      <Navlinks
        isOnFooter={false}
        setSelectNavLink={setSelectPageOnNav}
        activePage={activePage}
        isMobileNavLinks={mobileActive}
        setIsMobileNavLink={handleClick}
        hideNavLinks={hideNavLinks}
        setHideNavLinks={setHideNavLinks}
      />
      <RxHamburgerMenu
        className={styles.mobile_menu}
        size={52}
        onClick={() => {
          handleClick();
          setHideNavLinks(true);
        }}
      />
    </nav>
  );
};

export default Navbar;
