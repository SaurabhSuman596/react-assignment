import NewsCard from '../NewsCard/NewsCard';
import PostCard from '../PostCard/PostCard';
import './Feed.scss';

const Feed = () => {
  return (
    <div className="feed">
      <PostCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default Feed;
