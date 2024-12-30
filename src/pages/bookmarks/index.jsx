import Post from "../../components/post";
import posts from "../../mock/posts";
import { useState } from "react";
function Bookmarks() {
  const [filter, setFiltered] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.content.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="flex justify-start items-center px-4 min-w-[56px] h-[53px] text-[color:var(--color-base)] ">
          <div className="min-w-[56px] flex justify-start items-center">
            <button className="hover:bg-[color:var(--hover-base)] rounded-full p-1">
              <svg viewBox="0 0 24 24" width={20} height={20}>
                <path
                  fill="currentColor"
                  d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
                />
              </svg>
            </button>
          </div>
          <p className="text-xl font-bold">Yer İşaretleri</p>
        </div>
        <div className="px-5 py-1">
          <label className="relative flex items-center justify-center ">
            <button className="w-[56px] h-full flex items-center justify-center absolute top-0 -left-1 pointer-events-none ">
              <svg
                viewBox="0 0 24 24"
                className="w-[19px] h-[19px] text-[color:var(--color-base-secondary)] "
              >
                <path
                  fill="currentColor"
                  d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                />
              </svg>
            </button>
            <input
              type="text"
              className="py-2 pl-[40px] w-full bg-[color:var(--background-primary)] text-[color:var(--color-base)]  border-2 border-[color:var(--border-primary)]  outline-none rounded-full text-[15px] placeholder-[color:var(--color-base-secondary)] focus-within:border-[#1d9bf0]  "
              placeholder="Yer İşaretlerinde Ara"
              value={filter}
              onChange={(e) => setFiltered(e.target.value)}
            />
          </label>
        </div>
        <div className="text-[color:var(--color-base)] ">
          {filteredPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Bookmarks;
