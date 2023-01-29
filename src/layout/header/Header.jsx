import './Header.scss';
import logo from '../../assets/logos/logo.png';
import { Icon } from '@iconify/react';
import HeaderRight from './HeaderRight';

console.log(logo);

const Header = () => {
  return (
    <header>
      <div className="header__Container">
        <div className="header__Left">
          <img src={logo} alt="logo" className="logo__image" />
        </div>
        <HeaderRight />
        <Icon
          icon="icon-park-outline:hamburger-button"
          style={{ fontSize: 40 }}
          className="header__icon"
        />
      </div>
    </header>
  );
};

export default Header;
