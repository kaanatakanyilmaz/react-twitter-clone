import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" flex flex-wrap  px-4 mt-4 text-[color:var(--color-base-secondary)] ">
      <Link
        to="https://x.com/en/tos"
        className="my-0.5 pr-3 hover:underline  text-[13px] leading-4"
      >
        Hizmet Şartları
      </Link>
      <Link
        to="https://x.com/en/privacy"
        className="my-0.5 pr-3 hover:underline  text-[13px] leading-4"
      >
        Gizlilik Politikası
      </Link>
      <Link
        to="https://help.x.com/tr/rules-and-policies/x-cookies"
        className="my-0.5 pr-3 hover:underline text-[13px] leading-4"
      >
        Çerez Politikası
      </Link>
      <Link
        to="https://legal.x.com/tr/imprint"
        className="my-0.5 pr-3 hover:underline  text-[13px] leading-4"
      >
        Imprint
      </Link>
      <Link
        to="https://help.x.com/tr/resources/accessibility "
        className="my-0.5 pr-3 hover:underline  text-[13px] leading-4"
      >
        Erişilebilirlik
      </Link>
      <Link
        to="https://business.x.com/en/help/troubleshooting/how-x-ads-work"
        className="my-0.5 pr-3 hover:underline  text-[13px] leading-4"
      >
        Reklam bilgisi
      </Link>
      <div className="w-full">
        <Popover className=" relative leading-4 inline-flex">
          <PopoverButton className=" text-[13px] leading-4 outline-none hover:underline flex items-center  ">
            <p className="">Daha fazla</p>
            <svg viewBox="0 0 24 24" className=" h-[1em] px-0.5">
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              ></path>
            </svg>
          </PopoverButton>
          <PopoverPanel className="w-[176px] max-w-[384px] absolute bottom-0 right-0 bg-[color:var(--background-primary)] text-[color:var(--color-base)] shadow-box rounded-xl flex flex-col overflow-hidden">
            <Link
              to="https://about.x.com/tr"
              className="px-4 py-3  text-[15px] leading-5 font-bold hover:bg-[color:var(--hover-base-account)] transition-colors"
            >
              Hakkında
            </Link>
            <Link
              to="https://help.x.com/en/using-x/download-the-x-app"
              className="px-4 py-3  text-[15px] leading-5 font-bold hover:bg-[color:var(--hover-base-account)] transition-colors"
            >
              X uygulamasını indir
            </Link>
            <Link
              to="https://business.x.com/en?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
              className="px-4 py-3  text-[15px] leading-5 font-bold hover:bg-[color:var(--hover-base-account)] transition-colors"
            >
              İşletmeler için X
            </Link>
            <Link
              to="https://developer.x.com/en"
              className="px-4 py-3  text-[15px] leading-5 font-bold hover:bg-[color:var(--hover-base-account)] transition-colors"
            >
              Geliştiriciler
            </Link>
          </PopoverPanel>
        </Popover>
      </div>
      <p className="text-[#71767b] text-[13px] leading-4">
        &copy; 2024 by KAAN ATAKAN YILMAZ
      </p>
    </div>
  );
}
export default Footer;
