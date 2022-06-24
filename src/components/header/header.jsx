import { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import { Button } from "../common/common";
import { http } from "../../services/services";
import "./style.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const {
    mainList, setMainList,
    responseError, setResponseError,
    isLoader, setIsLoader
  } = useContext(AppContext)

  const handleSearch = async () => {
    if (!searchQuery) return;
    setIsLoader(true);
    await http.loadAll(searchQuery, { page: '1' }, handleResponse);
  }

  const handleResponse = (response) => {
    if (response.Error) {
      setResponseError(getError(response.Error));
      setMainList([]);
      setIsLoader(false);
      return;
    }
    setResponseError(null);
    setMainList(response.Search);
    setIsLoader(false);
  }

  const getError = (error) => {
    switch (error) {
      case 'Too many results.':
        return 'Too many results.';
      case 'Movie not found!':
        return 'Movies and products not found!';
      default:
        return 'Something went wrong.';
    }
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