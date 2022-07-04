import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { AppContext } from "../../context/context";
import { http } from "../../services/services";
import "./style.css";

const Header = () => {

  const {
    searchQuery, setSearchQuery,
    mainList, setMainList,
    responseError, setResponseError,
    isLoader, setIsLoader,
    pageState, setPageState
  } = useContext(AppContext)

  const handleSearch = async () => {
    if (!searchQuery) return;
    setIsLoader(true);
    await http.loadAll(searchQuery, { page: '1' }, handleResponse);
  }

  const handleResponse = (response) => {
    if (response.Error) {
      setResponseError(getError(response.Error));
      setPageState({ all: 0, current: 0 })
      setMainList(null);
      setIsLoader(false);
      return;
    }
    setResponseError(null);
    setMainList(response.Search);
    setPageState({ all: getPages(response.totalResults), current: 1 })
    setIsLoader(false);
  }

  const getPages = (allCount) => {
    if (allCount <= 10) return 1;
    return Math.ceil(allCount / 10);
  }

  const getError = (error) => {
    switch (error) {
      case 'Too many results.':
        return 'Too short search query.';
      case 'Movie not found!':
        return 'Movies and products not found!';
      default:
        return 'Something went wrong.';
    }
  }

  return (
    <>
      <h1 className="search-header">LET'S SEARCH SOME MEDIA PRODUCT</h1>
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
          attr={{ disabled: !searchQuery }}
          className="search__btn"
          value="Search"
          onClick={handleSearch}
        />
      <Link className="search-link" to="/my-list" >My List</Link>
      </form>
    </>
  )
}

export default Header;