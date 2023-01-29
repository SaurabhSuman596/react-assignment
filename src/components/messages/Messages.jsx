import Search from '../searchComp/Search';
import './Messages.scss';
import ProfileImage from '../../assets/images/profilePic2.jpg';
import { useState } from 'react';

const Messages = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="messages">
      <div className="messages__header">
        <p>Messages</p>
        <div className="messages__headerRight">
          <iconify-icon
            icon="ph:dots-three-vertical-fill"
            width="24"
          ></iconify-icon>
          <iconify-icon
            icon="ic:outline-keyboard-arrow-down"
            width="24"
            onClick={handleClick}
            className="click__messageShow"
          ></iconify-icon>
        </div>
      </div>
      <div className="message__ReqNoti">1 Request Message</div>
      <Search />
      {open && (
        <div className="message__anim">
          <div className="message__messageTab">
            <img src={ProfileImage} alt="profile" />
            <div className="message__messageContent">
              <div className="message__Contentheader">
                <p>Surya Kumar yadav</p>
                <p className="message__time">2mins</p>
              </div>
              <p className="message__message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eius.
              </p>
            </div>
          </div>
          <div className="message__messageTab">
            <img src={ProfileImage} alt="profile" />
            <div className="message__messageContent">
              <div className="message__Contentheader">
                <p>Surya Kumar yadav</p>
                <p className="message__time">2mins</p>
              </div>
              <p className="message__message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eius.
              </p>
            </div>
          </div>
          <div className="message__messageTab">
            <img src={ProfileImage} alt="profile" />
            <div className="message__messageContent">
              <div className="message__Contentheader">
                <p>Surya Kumar yadav</p>
                <p className="message__time">2mins</p>
              </div>
              <p className="message__message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eius.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
