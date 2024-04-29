import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
function Header({setCategory,setSearchFilter}) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  function handleClick(val){
    setCategory(val)
  }
  function handleSearchvalue(){
    setSearchFilter(searchValue.trim());
  }
  return (
    <div id="header" className="p-4">
      <div id="flex">
      <input
          type="text"
          className="form-control mb-2 search"
          placeholder="Search for news"
          value={searchValue}
          onChange={handleInputChange}
        />
      <button className="btn btn-primary search-button" onClick={handleSearchvalue}>Search</button>
      </div>
       <br />
      <h3>Top Stories for You</h3>
      <ul className="list-unstyled" id="headerlist">
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("business")}>Business</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("entertainment")}>Entertainment</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("politics")}>Politics</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("sport")}>Sport</li>
        <li className="mr-3 mb-1 btn btn-secondary" onClick={() => handleClick("tech")}>Tech</li>
      </ul>
    </div>
  );
}

export default Header;
