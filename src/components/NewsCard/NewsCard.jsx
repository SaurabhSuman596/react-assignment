import './NewsCard.scss';
import profilePic from '../../assets/images/profilePic2.jpg';
import Verified from '../../assets/logos/verified.png';
import image from '../../assets/images/image1.jpg';
import shareImage from '../../assets/images/share.png';
import commentImage from '../../assets/images/comment.png';

const NewsCard = () => {
  return (
    <div className="newsCard">
      <div className="newsCard__header">
        <div className="news__headerLeft">
          <img src={profilePic} alt="profile pic" />
          <div className="headerLeft__info">
            <p className="headerInfo__para">
              <p className="news__PerosnName">Surya Kumar Yadav</p>
              <img width={25} height={25} src={Verified} alt="verified" />
              <p>2mins</p>
              <p className="news__followPerosn">Follow</p>
            </p>
            <p className="news__username">@beast</p>
          </div>
        </div>
        <div className="news__headerRight">
          <iconify-icon
            icon="ph:dots-three-vertical-fill"
            width="24"
          ></iconify-icon>
        </div>
      </div>
      <div className="newsCard__mainContent">
        <p>
          If I don’t see the ball leave your hand, I’m leaving the dog park.
          Don’t miss these paw-some dog quotes that celebrate your furry friend!
        </p>
        <img src={image} alt="img" />
        <div className="newsTotalLC">
          <p>123 likes</p>
          <div className="newsComentshareTotal">
            <p>23 Comments</p>
            <p>12 Shares</p>
          </div>
        </div>
      </div>
      <div className="newsCard__Footer">
        <p>
          {' '}
          <iconify-icon icon="icon-park-outline:like" width="24"></iconify-icon>
          <span>Like</span>
        </p>
        <p>
          {' '}
          <img src={commentImage} alt="comment" />
          <span>Comment</span>
        </p>
        <p>
          {' '}
          <img src={shareImage} alt="share" />
          <span>Share</span>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
