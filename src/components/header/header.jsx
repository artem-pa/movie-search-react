import { useState } from "react";
import { Button } from "../common/common";
import "./style.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (!searchQuery) return;
    console.log(searchQuery)
  }

  return (
    <form className="search" onKeyDown={(e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        handleSearch()
      }
    }}>
      <input
        type="search"
        className="search__area"
        placeholder="Write name of movie, series, anime etc."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <Button
        className="search__btn"
        value="Search"
        onClick={handleSearch}
      />
    </form>
  )
}

export default Header;