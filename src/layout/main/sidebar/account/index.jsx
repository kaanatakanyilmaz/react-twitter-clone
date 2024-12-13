import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useAccount } from "../../../../store/auth/hooks";
import MoreAccount from "./moreaccount";

function Account() {
  const account = useAccount();

  return (
    <div className="mt-auto ">
      <Popover className="relative">
        <PopoverButton className="p-3 my-3 w-full outline-none hover:bg-[#eff3f41a]  rounded-full transition-colors flex  ">
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />

          <div className="mx-3 text-[15px] text-left">
            <h6 className="font-bold  ">{account.userName}</h6>
            <div className="text-[#71767b]">{account.fullName}</div>
          </div>
          <div className="ml-auto my-auto flex justify-center items-center">
            <svg viewBox="0 0 24 24" className="w-[19px] h-[19px]">
              <path
                fill="#e7e9ea"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              ></path>
            </svg>
          </div>
        </PopoverButton>

        <PopoverPanel className=" w-[300px] absolute bottom-full left 1/2-translate-x-1/2 bg-black shadow-box rounded-xl">
          <MoreAccount />
        </PopoverPanel>
      </Popover>
    </div>
  );
}
export default Account;
