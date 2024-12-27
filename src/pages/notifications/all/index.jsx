import posts from "../../../mock/posts";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
function All({ post }) {
  if (!post || !post.account) {
    return <div></div>;
  }
  console.log("gelendeğer", post);
  return (
    <Link className="border-b border-[color:var(--border-primary)]  ">
      <div className="py-3 px-4 flex flex-wrap hover:bg-[color:var(--hover-base-secondary)]">
        <div className="mr-2">
          <svg viewBox="0 0 24 24" height={30} width={30}>
            <path
              d="M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z"
              fill="#794BC4"
            />
          </svg>
        </div>
        <div className="flex-1">
          <div className=" flex flex-wrap justify-between items-center pb-2">
            <img src={post.account.avatar} className="h-8 w-8 rounded-full" />
            <Popover className="relative">
              <PopoverButton
                className={
                  " outline-none w-[34.75px] h-[34.75px] text-[color:var(--color-base-secondary)] rounded-full  flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-colors"
                }
              >
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  ></path>
                </svg>
              </PopoverButton>
              <PopoverPanel className="w-[200px] absolute top-2 right-0  border-[color:var(--border-primary)] bg-[color:var(--background-primary)]  shadow-box rounded-xl z-[2] transition-colors">
                <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                    <path
                      fill="currentColor"
                      d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                    ></path>
                  </svg>
                  <p className="pl-3 font-bold"> Daha az sıklıkla gör</p>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
          <p> {post.account.fullname}adlı kullanıcının son gönderisi</p>

          <p className="text-[color:var(--color-base-secondary)]">
            Yeni projeler üzerinde çalışırken kahve en büyük yardımcım.
            Yaratıcılığı körükleyen bir güç!
          </p>
        </div>
      </div>
    </Link>
  );
}

export default All;
