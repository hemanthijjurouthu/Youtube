import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);


  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log("API CALL",searchQuery);
    dispatch(cacheResults({[searchQuery] : json[1]}));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg p-2">
      <div className="grid grid-flow-col">
        <div className="flex col-span-1">
          <img
            onClick={() => toggleMenuHandler()}
            alt="Hamberger"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
            className="h-12 cursor-pointer"
          />

          <img
            alt="logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            className="h-12"
          />
        </div>

        <div className="col-span-10 px-10 relative">
          <div>
            <input
              type="text"
              className="w-1/2 ml-44 border border-gray-400 rounded-l-full p-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            <button className="border border-gray-400 rounded-r-full w-12 bg-gray-200 p-2">
              &#x1F50D;
            </button>
          </div>

          {/* Suggestion Box */}
          {showSuggestions && (
            <div className="absolute top-full ml-44 bg-white w-[30rem] rounded-lg border border-gray-200 shadow-lg">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="hover:bg-gray-100 px-2 py-2"
                  >
                    &#x1F50D; {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-1">
          <img
            alt="user"
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
