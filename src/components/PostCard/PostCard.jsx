import './PostCard.scss';
import profile from '../../assets/images/profilePic1.jpg';
import { useState } from 'react';

const PostCard = () => {
  const [data, setData] = useState('');

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    setData('Your Post has been uploaded!');
    setTimeout(() => {
      setData('');
    }, 2000);
  };

  return (
    <div className="postCard">
      <div className="postCard__topBox">
        <img src={profile} alt="profile pic" />
        <input
          value={data}
          type="text"
          placeholder="Post a Feed"
          onChange={handleChange}
        />
      </div>
      <p>{data}</p>
      <div className="postCard__bottomBox">
        <div className="box__media">
          <iconify-icon
            icon="ic:baseline-photo"
            width="24"
            color="#616076"
          ></iconify-icon>
          <p>Photo</p>
        </div>
        <button onClick={handleClick} className="postCard__btn">
          Post
        </button>
      </div>
    </div>
  );
};

export default PostCard;
