import { numberFormat } from "../../utils/format";
function List({ list }) {
  return (
    <div className=" px-4 py-3 hover:bg-[color:var(--hover-base-secondary)] ">
      <div className=" flex justify-between items-center ">
        <div className="flex">
          <img src={list.photos} className="w-12 h-12 rounded-xl mr-2" />
          <div className=" ">
            <div className="flex items-center  ">
              <div className="text-base font-bold text-[color:var(--color-base)]">
                {list.account.fullName}
              </div>
              <div className="pr-2">
                <span className="px-1 pl font-bold text-sm text-[color:var(--color-base-secondary)]">
                  ·
                </span>
              </div>

              <div className="text-sm text-[color:var(--color-base-secondary)]">
                {list?.stats.member && (
                  <div className="text-sm -ml-2">
                    {numberFormat(list.stats.member)} üye
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex ">
                <img
                  src={list.account.avatar}
                  alt=""
                  className="h-6 w-6 rounded-full z-30"
                />
                <img
                  src={list.account.avatarSecond}
                  alt=""
                  className="h-6 w-6 rounded-full z-20 -ml-3"
                />
                <img
                  src={list.account.avatar}
                  alt=""
                  className="h-6 w-6 rounded-full  z-10 -ml-3"
                />
                <img
                  src={list.account.avatarSecond}
                  alt=""
                  className="h-6 w-6 rounded-full  -ml-3"
                />
              </div>
              <div className="pl-2 text-sm text-[color:var(--color-base-secondary)]">
                @{list.account.username} dahil{" "}
                {numberFormat(list.stats.followers)} takipçi
              </div>
            </div>
          </div>
        </div>

        <button className=" p-1 w-8 h-8 flex items-center justify-center bg-[color:var(--color-base)] rounded-full">
          <svg
            viewBox="0 0 24 24"
            width={18}
            height={18}
            className="text-[color:var(--background-primary)]"
          >
            <path
              fill="currentColor"
              d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default List;
