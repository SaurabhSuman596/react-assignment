import './Trending.scss';

const Trending = () => {
  return (
    <div className="trending">
      <h4>Trending</h4>
      <div className="trending__newsBox">
        <div className="trending__boxHeading">
          <p className="trending__Boxcircle"></p>
          <p>Some random new article heading</p>
        </div>
        <div className="trending__timeReaders">
          <p>20h ago</p>
          <p>8223 Readers</p>
        </div>
      </div>
      <div className="trending__newsBox">
        <div className="trending__boxHeading">
          <p className="trending__Boxcircle"></p>
          <p>Some random new article heading</p>
        </div>
        <div className="trending__timeReaders">
          <p>20h ago</p>
          <p>8223 Readers</p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
