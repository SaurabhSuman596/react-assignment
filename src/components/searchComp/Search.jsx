import './Search.scss';

const Search = () => {
  return (
    <div className="rightSide__searchContainer">
      <iconify-icon icon="akar-icons:search" width="24"></iconify-icon>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
