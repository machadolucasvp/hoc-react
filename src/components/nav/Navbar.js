import React from 'react';
import withLoadingIndicator from '../loading/LoadingIndicator.hoc';
import Navlist from './NavList';

const NavlistWithLoading = withLoadingIndicator(Navlist);

const NavBar = () => {
  return ( 
    <nav>
      <NavlistWithLoading isLoading={true} />
    </nav>
   );
}
 
export default NavBar;
