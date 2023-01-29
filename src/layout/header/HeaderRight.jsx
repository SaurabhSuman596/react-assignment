import './Header.scss';
import ProfilePic from '../../assets/images/profilePic1.jpg';

const HeaderRight = () => {
  return (
    <ul className="header__Right">
      <li className="header__navlink">
        <a href="#" className="header__a">
          {' '}
          <p>About</p>
          <span className="navlinks__focusedIndiacator"></span>
        </a>
      </li>
      <li className="header__navlink">
        <a href="#" className="header__a">
          {' '}
          <p>Community</p>
          <span className="navlinks__focusedIndiacator"></span>
        </a>
      </li>
      <li className="header__navlink">
        <a href="#" className="header__a">
          <p>Listings</p>
          <span className="navlinks__focusedIndiacator"></span>
        </a>
      </li>
      <li className="header__navlink">
        <a href="#" className="header__a">
          <p>Agents</p>
          <span className="navlinks__focusedIndiacator"></span>
        </a>
      </li>
      <img className="profile__Image" src={ProfilePic} alt="profile pic" />
    </ul>
  );
};

export default HeaderRight;
