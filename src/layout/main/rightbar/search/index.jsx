import { useState, useRef } from "react";
import { useClickAway } from "react-use";

function Search() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const ref = useRef();
  useClickAway(ref, () => {
    setFocus(false);
  });

  return (
    <div
      ref={ref}
      className="h-[53px] mb-3 flex items-center sticky top-0 bg-black z-[1]"
    >
      <label className="h-[44px]  rounded-full bg-[#202327] outline-none relative w-full border border-transparent group focus-within:bg-black focus-within:border-[#1d9bf0]">
        <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none ">
          <svg
            viewBox="0 0 24 24"
            className="w-[19px] h-[19px] text-[#71767b] "
          >
            <path
              fill="#71767b"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full h-full bg-transparent pl-[56px] outline-none rounded-full text-[15px] placeholder-[#71767b] "
          placeholder="Ara"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocus(true)}
        />
        {query && focus && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="bg-[#1d9bf0] w-[22px] h-[22px] flex items-center justify-center rounded-full absolute top-[10px] right-3 invisible group-focus-within:visible"
          >
            <svg viewBox="0 0 15 15" className="w-[10px] h-[10px]">
              <path
                fill="#000000"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              />
            </svg>
          </button>
        )}
      </label>
      {focus && (
        <div className="absolute w-[350px] top-full -left-px -translate-y-1 bg-black shadow-box max-h-[calc(80vh-53px)] rounded-lg text-center min-h-[100px]">
          <p className="pt3 pt-5 text-[#71767b] leading-5">
            Kişileri, listeleri veya anahtar kelimeleri aramayı dene
          </p>
        </div>
      )}
    </div>
  );
}
export default Search;
