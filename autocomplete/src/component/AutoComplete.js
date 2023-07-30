import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const AutoComplete = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 API calls is <200ms, decline an API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // if search item not present in cache, make an api call and update the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="col-span-10 px-10">
      <div className="flex ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          // onBlur={() => setShowSuggestions(false)}
          className="w-[35%] p-2 px-5 border border-gray-400 rounded-l-full"
        />
        <div className="px-4 py-2 bg-gray-100 border border-gray-400 rounded-r-full cursor-pointer" onClick={() => setShowSuggestions(false)}>
          🔍
        </div>
      </div>

      {showSuggestions && showSuggestions.length !== 0 && (
        <div className="fixed bg-slate-200  px-5 w-1/3 rounded-lg">
          <ul>
            {suggestions.map((suggestion, i) => (
              <div key={i}>
                <li
                  className=" py-2 m-1 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleClick(suggestion)}
                >
                  🔍 {suggestion}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
