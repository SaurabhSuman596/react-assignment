import './Community.scss';
import { Header } from '../../layout/index';
import LeftSideBar from '../../layout/leftSideBar/LeftSideBar';
import Feed from '../../components/Feed/Feed';
import RightSideBar from '../../layout/rightSideBar/RightSideBar';

const Community = () => {
  return (
    <>
      <Header />
      <div className="community__Main">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </div>
    </>
  );
};

export default Community;
