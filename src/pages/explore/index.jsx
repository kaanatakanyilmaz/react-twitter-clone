import Foryou from "./for-you";
import Topics from "./topics";
import News from "./news";
import Sport from "./sport";
import Entertainment from "./entertainment";
import Tab from "../../components/tab";

function Explore() {
  return (
    <div>
      <div className="">
        <div className="flex items-center mt-2">
          <div className="mx-3 p-2 hover:bg-[--hover-base] rounded-full">
            <svg
              viewBox="0 0 24 24"
              height={20}
              width={20}
              className="text-[color:var(--color-base)]"
            >
              <path
                fill="currentColor"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <label className="relative flex items-center justify-center  ">
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
                className="py-2 pl-[40px] w-full bg-[color:var(--hover-base)]  border-2 border-[color:var(--border-primary)]  outline-none rounded-full text-[15px] placeholder-[color:var(--color-base-secondary)] focus-within:border-[#1d9bf0]  "
                placeholder="Yer İşaretlerinde Ara"
                // value={filter}
                // onChange={(e) => setFiltered(e.target.value)}
              />
            </label>
          </div>

          <div className="mx-3 p-2 hover:bg-[--hover-base] rounded-full">
            <svg
              viewBox="0 0 24 24"
              width={20}
              height={20}
              className="text-[color:var(--color-base)]"
            >
              <path
                fill="currentColor"
                d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <>
        <Tab activeTab="for-you">
          <Tab.Items>
            <Tab.Item id="for-you">Sana özel</Tab.Item>

            <Tab.Item id="topics">Gündemdekiler</Tab.Item>
            <Tab.Item id="news">Haberler</Tab.Item>
            <Tab.Item id="sport">Spor</Tab.Item>
            <Tab.Item id="entertainment">Eğlence</Tab.Item>
          </Tab.Items>
          <Tab.Content id="for-you">
            <Foryou />
          </Tab.Content>
          <Tab.Content id="topics">
            <Topics />
          </Tab.Content>
          <Tab.Content id="news">
            <News />
          </Tab.Content>
          <Tab.Content id="sport">
            <Sport />
          </Tab.Content>
          <Tab.Content id="entertainment">
            <Entertainment />
          </Tab.Content>
        </Tab>
      </>
    </div>
  );
}
export default Explore;
