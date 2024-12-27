import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";
import Button from "../../components/button";
import { removeModal } from "../../store/modal/actions";
function ChatRoom() {
  const [select, setSelect] = useState("Sadece konuşmaya davet ettiklerin");
  return (
    <div className="max-w-[600px] w-full max-h-[535px] h-full bg-[color:var(--background-primary)] rounded-2xl mx-auto">
      <div className="h-[53px] min-w-[53px] flex justfiy-center items-center flex-wrap px-4 leading-5">
        <button
          className=" hover:bg-[color:var(--hover-base)] text-[color:var(--color-base)] rounded-full w-[34px] h-[34px] flex justify-center items-center transition-colors "
          onClick={() => removeModal()}
        >
          <svg viewBox="0 0 24 24" width={20} height={20} className="">
            <path
              fill="currentColor"
              d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
            />
          </svg>
        </button>
      </div>

      <div className=" flex justify-center items-center">
        <svg viewBox="0 0 24 24" width={48} height={48}>
          <path
            fill="#7856ff "
            d="M12 22.25c-4.99 0-9.18-3.393-10.39-7.994l1.93-.512c.99 3.746 4.4 6.506 8.46 6.506s7.47-2.76 8.46-6.506l1.93.512c-1.21 4.601-5.4 7.994-10.39 7.994zm0-20.5c-3.87 0-7 3.134-7 7v2.75c0 3.866 3.13 7 7 7s7-3.134 7-7V8.75c0-3.866-3.13-7-7-7zm-2.25 9.5c0 .414-.34.75-.75.75s-.75-.336-.75-.75V9c0-.414.34-.75.75-.75s.75.336.75.75v2.25zm3 1c0 .414-.34.75-.75.75s-.75-.336-.75-.75V8c0-.414.34-.75.75-.75s.75.336.75.75v4.25zm3-1c0 .414-.34.75-.75.75s-.75-.336-.75-.75V9c0-.414.34-.75.75-.75s.75.336.75.75v2.25z"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-center  p-[32px]  gap-4 group text-[color:var(--color-base)]">
        <h6 className="leading-8 font-bold text-[26px] flex">
          Sohbet Odanı oluştur
        </h6>
        <Popover>
          <PopoverButton className="group">
            <div className="flex flex-col rounded border border-[#393337] w-[519px] group-hover:border-[#1d9bf0]">
              <label class="text-[color:var(--color-base)] text-[13px] font-medium pl-2 bg-[color:var(--background-primary)]   py-3 pt-1  leading-5 focus:outline-none text-left -mb-5">
                Kimler konuşabilir?
              </label>
              <div className="relative">
                <div className="bg-transparent text-[color:var(--color-base)]  px-2 py-2 pt-1 mt-2 text-[17px] leading-5  appearance-none  text-left">
                  {select}
                </div>
                <svg
                  viewBox="0 0 24 24"
                  width={23}
                  height={23}
                  className="mr-3 absolute top-0 right-0 "
                >
                  <path
                    fill="currentColor"
                    d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                  ></path>
                </svg>
              </div>
            </div>
          </PopoverButton>
          <PopoverPanel className="flex flex-col text-left border border-[#393337] w-[517px] text-[color:var(--color-base)] ">
            <button
              id="1"
              className="hover:bg-[#7db1e5] hover:text-[color:var(--color-base)] text-left px-2 "
              onClick={() => setSelect("Sadece konuşmaya davet ettiklerin")}
            >
              Sadece konuşmaya davet ettiklerin
            </button>
            <button
              id="2"
              className="hover:bg-[#7db1e5] hover:text-[color:var(--color-base)] text-left px-2 "
              onClick={() => setSelect("Takip ettiğin kişiler")}
            >
              Takip ettiğin kişiler
            </button>
            <button
              id="3"
              className="hover:bg-[#7db1e5] hover:text-[color:var(--color-base)] text-left px-2 "
              onClick={() => setSelect("Herkes")}
            >
              Herkes
            </button>
          </PopoverPanel>
        </Popover>

        <div className="text-[#333639]  w-[519px]">
          <input
            type="text"
            placeholder="Nelerden bahsetmek istiyorsun?"
            className=" placeholder:[#333639] rounded-full leading-4 bg-[color:var(--background-primary)] border   border-[#333639] px-4 h-[40px] w-full text-[color:var(--color-base)] focus:outline-none focus:border-[#1d9bf0]"
          />
        </div>

        <button className="hover:bg-[#1d9bf01a] rounded-full px-4 leading-5 text-[#1d9bf0] text-[15px] font-bold min-h-[36px]">
          Konu Ekle (0/3)
        </button>

        <div className="flex justify-between items-center ">
          <div className="flex flex-row gap-1  items-center">
            <span>Sohbet Odasını Kaydet</span>
            <div className="hover:bg-[#1d9bf01a] rounded-full p-1">
              <svg viewBox="0 0 24 24" width={22} height={22}>
                <path
                  fill="#1d9bf0"
                  d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"
                />
              </svg>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <label class="relative flex flex-col justify-center">
              <input type="checkbox" class="sr-only peer" />
              <span class=" w-[40px] h-[15px]  bg-[#939393] rounded-full peer-checked:bg-[#6bc9fb] transition duration-300"></span>
              <span class="absolute  left-0 w-5 h-5 bg-[#fff] peer-checked:bg-[#1d9bf0] rounded-full shadow-md peer-checked:translate-x-6 transition-transform duration-300"></span>
            </label>
          </div>
        </div>

        <div className="flex  flex-row gap-8 ">
          <Button
            size="blueLarge"
            className="w-[467px] h-[44px] bg-[#1d9bf0] rounded-full font-bold text-[#fff]"
          >
            Şimdi Başlat
          </Button>
          <button className="border border-[#536471] rounded-full p-3 hover:bg-[#1d9bf01a]">
            <svg viewBox="0 0 24 24" width={22} height={22} className="">
              <path
                fill="#1d9bf0"
                d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"
              />
            </svg>
          </button>
        </div>
        <button className="hover:bg-[#1d9bf01a] rounded-full px-4 leading-5 text-[#1d9bf0] text-[15px] font-bold min-h-[36px]">
          Sohbet odaları hakkında bilgi edin
        </button>
      </div>
    </div>
  );
}
export default ChatRoom;
