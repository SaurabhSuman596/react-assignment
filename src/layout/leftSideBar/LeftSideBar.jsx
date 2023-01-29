import './LeftSideBar.scss';

const LeftSideBar = () => {
  return (
    <div className="leftSideBar">
      <p className="leftSidebar__navLink">
        <span className="leftNav__focus"></span>
        <iconify-icon icon="akar-icons:home" width="24"></iconify-icon>
        <p>Home</p>
      </p>

      <p className="leftSidebar__navLink" name="Coinesting">
        <span className="leftNav__focus"></span>
        <iconify-icon icon="carbon:money" width="24"></iconify-icon>
        <p className="LeftNavalink__para">Coinvesting</p>
      </p>

      <div className="leftSidebar__navlinkSubMenu" name="Coinesting">
        <span></span>
        <p>Development Property</p>
        <p>Pre-Leased Property</p>
        <p>Group Order</p>
      </div>

      <p className="leftSidebar__navLink">
        <span className="leftNav__focus"></span>
        <iconify-icon
          icon="bxs:message-square-detail"
          width="24"
        ></iconify-icon>
        <p>message</p>
        <p className="leftbar__messageNoti">3</p>
      </p>
      <p className="leftSidebar__navLink">
        <span className="leftNav__focus"></span>
        <iconify-icon icon="carbon:money" width="24"></iconify-icon>
        <p>Coinesting</p>
      </p>
      <p className="leftSidebar__navLink">
        <span className="leftNav__focus"></span>
        <iconify-icon icon="carbon:money" width="24"></iconify-icon>
        <p>Coinesting</p>
      </p>
    </div>
  );
};

export default LeftSideBar;
