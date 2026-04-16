// import { useState } from 'react';

import { convertFirtLetterCapital } from '../../utils/functions';
import { menuLinks } from '../../data/data';
import styles from './navlinks.module.css';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

const Navlinks = ({
  isOnFooter,
  setSelectNavLink,
  activePage,
  isMobileNavLinks,
  setIsMobileNavLink,
  hideNavLinks,
  setHideNavLinks,
}) => {
  const [screenSize, setScreenSize] = useState(true);

  useEffect(() => {
    const getScreenSize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize(true);
      } else {
        setScreenSize(false);
      }
    };

    window.addEventListener('resize', getScreenSize);
    getScreenSize();

    return () => window.removeEventListener('resize', getScreenSize);
  }, [screenSize]);

  const closeMobileMenu = () => {
    if (isMobileNavLinks) {
      setIsMobileNavLink(false);
      window.scrollTo(0, 0);
    }
  };

  const handleNavLinkClick = (menulink) => {
    setSelectNavLink(menulink);
    closeMobileMenu();
  };

  return (
    <div
      className={`${styles.navlinks} ${isMobileNavLinks ? styles.mobile_menu : ''}`}
      onClick={() => {
        closeMobileMenu();
        setSelectNavLink('home');
      }}
    >
      {isMobileNavLinks && (
        <>
          <div className={styles.mobile_close}>
            <IoCloseCircleOutline
              size={45}
              onClick={() => {
                closeMobileMenu();
                setHideNavLinks(false);
              }}
            />
          </div>
        </>
      )}
      {menuLinks.map((menulink, index) => (
        <p
          className={`${isOnFooter ? styles.navlink_footer : styles.navlink} ${activePage === menulink ? styles.active : ''}`}
          key={index}
          onClick={(e) => {
            handleNavLinkClick(menulink);
            e.stopPropagation();
            setHideNavLinks(true);
            isMobileNavLinks && setHideNavLinks(false);
          }}
        >
          {(hideNavLinks || !screenSize) && convertFirtLetterCapital(menulink)}
        </p>
      ))}
    </div>
  );
};

export default Navlinks;
