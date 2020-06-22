import React from 'react';
import withLoadingIndicator from '../loading/LoadingIndicator.hoc';
import Navlist from './Navlist';
import styles from './Navbar.module.css';

const NavlistWithLoading = withLoadingIndicator(Navlist);

const NavBar = ({ isLoading }) => {
  return ( 
    <nav className={styles.navbar}>
      <NavlistWithLoading isLoading={isLoading} />
    </nav>
   );
}
 
export default NavBar;
