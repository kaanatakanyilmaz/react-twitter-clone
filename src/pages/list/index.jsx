import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import posts from "../../mock/posts";
import Post from "../../components/post";
import lists from "../../mock/list";
import List from "../../components/list";

function Lists() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const ref = useRef();
  useClickAway(ref, () => {
    setFocus(false);
  });
  return (
    <div>
      <div
        ref={ref}
        className=" px-4 mb-3 flex flex-wrap items-center justify-between sticky top-0 bg-[color:var(--background-primary)] z-[1]"
      >
        <div>
          <button className="hover:bg-[color:var(--hover-base)] rounded-full p-1">
            <svg viewBox="0 0 24 24" width={20} height={20}>
              <path
                fill="currentColor"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
          </button>
        </div>

        <div className="flex w-[432px] ml-5 mt-1">
          <label className="h-[42px]  rounded-full bg-[color:var(--background-primary)] outline-none relative w-full border border-[color:var(--border-primary)]  group focus-within:bg-black focus-within:border-[#1d9bf0]">
            <div className="w-[56px] h-full flex items-center justify-center absolute top-0 left-0 pointer-events-none ">
              <svg
                viewBox="0 0 24 24"
                className="w-[19px] h-[19px] text-[color:var(--color-base-secondary)] "
              >
                <path
                  fill="currentColor"
                  d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="w-full h-full bg-[color:var(--color-search)] pl-[56px] outline-none rounded-full text-[15px] placeholder-[#71767b] "
              placeholder="Ara"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocus(true)}
            />
            {query && focus && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="bg-[#1d9bf0] w-[22px] h-[22px] flex items-center justify-center rounded-full absolute top-[15px] right-3 invisible group-focus-within:visible"
              >
                <svg viewBox="0 0 15 15" className="w-[10px] h-[10px] ">
                  <path
                    fill="#000000"
                    d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
                  />
                </svg>
              </button>
            )}
          </label>
          {focus && (
            <div className="absolute w-[432px] top-full  -translate-y-1  bg-[color:var(--background-primary)] border border-[color:var(--border-primary)] shadow-box max-h-[calc(80vh-53px)] rounded-lg text-center min-h-[100px]">
              <p className="pt-3  text-[#71767b] leading-5 text-[color:var(--color-base-secondary)]">
                Liste aramayı dene
              </p>
            </div>
          )}
        </div>
        <div className="flex">
          <div className="hover:bg-[color:var(--hover-base)] rounded-full">
            <svg
              viewBox="0 0 24 24"
              className="w-[19px] h-[19px] text-[color:var(--color-base-secondary)]  m-2 "
            >
              <path
                fill="currentColor"
                d="M5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5H12v2H5.5C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5V13h-2V4.5c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2zm10 7v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"
              />
            </svg>
          </div>
          <div className="hover:bg-[color:var(--hover-base)] rounded-full">
            <svg
              viewBox="0 0 24 24"
              className="w-[19px] h-[19px]  text-[color:var(--color-base-secondary)] m-2 "
            >
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="py-3 px-4 text-xl font-bold text-[color:var(--color-base-primary)]">
        Yeni Listeler Keşfet
      </p>
      <div className="w-full">
        {lists.map((list) => (
          <List list={list} key={list.id} />
        ))}
      </div>
      <div className=" text-left py-4 px-4 hover:bg-[color:var(--hover-base-secondary)] border-b border-[color:var(--border-primary)]">
        <a href="explore" className="text-[#1d9bf0]">
          Daha fazla göster
        </a>
      </div>
      <div className="py-3 px-4 text-xl font-bold text-[color:var(--color-base-primary)]">
        Listelerin
      </div>
      <div className="p-8">
        <p className="mt-2 leading-5 text-base font-normal text-[color:var(--color-base-secondary)]">
          Hiç Liste oluşturmadın veya takip etmedin. Oluşturduğun veya takip
          ettiğin Listeler burada görünür.
        </p>
      </div>
    </div>
  );
}

export default Lists;
