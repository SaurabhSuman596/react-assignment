import Messages from '../../components/messages/Messages';
import Search from '../../components/searchComp/Search';
import Trending from '../../components/trending/Trending';
import './RightSideBar.scss';

const RightSideBar = () => {
  return (
    <div className="rightSideBar">
      <Search />
      <Trending />
      <Messages />
    </div>
  );
};

export default RightSideBar;
