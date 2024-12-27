import Post from "../../components/post";
import posts from "../../mock/posts";
import { useState } from "react";
function Communities() {
  const [filter, setFiltered] = useState("");
  const [value, setValue] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.content.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filter);

  return (
    <div>
      <div>
        <div className="flex justify-start items-center px-4 min-w-[56px] h-[53px] border-b border-[color:var(--border-primary)]">
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
          <p className="text-xl font-bold ">Topluluklar</p>
        </div>
        <div className="px-5 py-1">
          <div class="relative w-full overflow-hidden">
            <div id="slider" className="flex transition-transform duration-300">
              <button
                onClick={() => setFiltered("Spor")}
                className="ml-2 m-2 px-4  hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Spor
              </button>
              <button
                onClick={() => setFiltered("Teknoloji")}
                className=" m-2 px-4 py-1 hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Teknoloji
              </button>

              <button
                onClick={() => setFiltered("Sanat")}
                className=" m-2 px-4 hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Sanat
              </button>
              <button
                onClick={() => setFiltered("Eğlence")}
                className=" m-2 px-4 hover:bg-[color:var(--hover-base)]  border border-[color:var(--border-primary)] rounded-full"
              >
                Eğlence
              </button>
              <button
                onClick={() => setFiltered("Oyun")}
                className=" m-2 px-4  hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Oyun
              </button>
              <button
                onClick={() => setFiltered("Siyaset")}
                className=" m-2 px-4  hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Siyaset
              </button>
              <button
                onClick={() => setFiltered("İşletme")}
                className=" m-2 px-4 hover:bg-[color:var(--hover-base)]  border border-[color:var(--border-primary)] rounded-full"
              >
                İşletme
              </button>
              <button
                onClick={() => setFiltered("Kültür")}
                className=" m-2 px-4  hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Kültür
              </button>
              <button
                onClick={() => setFiltered("Bilim")}
                className=" m-2 px-4  hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Bilim
              </button>
              <button
                onClick={() => setFiltered("Yemek")}
                className=" m-2 px-4  hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Yemek
              </button>
              <button
                onClick={() => setFiltered("Hayvanlar")}
                className=" m-2 px-4  hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Hayvanlar
              </button>
              <button
                onClick={() => setFiltered("Eğitim")}
                className=" m-2 px-4 hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Eğitim
              </button>

              <button
                onClick={() => setFiltered("Haberler")}
                className=" m-2 px-4 hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Haberler
              </button>

              <button
                onClick={() => setFiltered("Seyahat")}
                className=" m-2 px-4 hover:bg-[color:var(--hover-base)] border border-[color:var(--border-primary)] rounded-full"
              >
                Seyahat
              </button>
            </div>

            <button
              id="left-arrow"
              class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path
                  fill="currentColor"
                  d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
                />
              </svg>
            </button>

            <button
              id="right-arrow"
              class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path
                  fill="currentColor"
                  d="M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          {filteredPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Communities;
