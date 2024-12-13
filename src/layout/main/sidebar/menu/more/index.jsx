import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { moreConst } from "../../../../../utils/const";
function More() {
  return (
    <Popover className="relative">
      <PopoverButton className=" flex items-center  py-[3px] outline-none">
        <button>
          <div className="inline-flex items-center hover:bg-[#eff3f41a] p-3 rounded-full gap-5 transition-colors">
            <div className="w-[26.25] h-[26.25] ">
              <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                <path
                  fill="#e7e9ea"
                  d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                />
              </svg>
            </div>
            <div className=" text-xl pr-4 ">Daha fazla</div>
          </div>
        </button>
      </PopoverButton>

      <PopoverPanel className="w-[318px]  absolute bottom-0  bg-black shadow-box rounded-xl ">
        <div>
          {moreConst.map((menu, index) => (
            <button
              key={index}
              className=" h-14 w-full inline-flex items-center hover:bg-[#eff3f41a] p-4 rounded-xl gap-5 transition-colors"
            >
              <div className="w-[26.25] h-[26.25] ">{menu?.panel}</div>
              <div className=" text-xl pr-4 font-bold">{menu?.title}</div>
            </button>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}
export default More;
