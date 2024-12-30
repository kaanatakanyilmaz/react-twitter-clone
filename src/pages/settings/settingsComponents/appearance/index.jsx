import { Link } from "react-router-dom";
import { useAppearance } from "../../../../store/appearance/hooks";
import classNames from "classnames";
import {
  setBackgroundColor,
  setBorderColor,
  setColor,
  setHover,
} from "../../../../store/appearance/actions";
function Appearance() {
  const { backgroundColor, color } = useAppearance();
  return (
    <div className=" flex-1 py-3  ">
      <p className="text-xl ml-4 font-bold">Görünüm</p>
      <div>
        <p className="mt-2 text-[13px] text-[color:var(--color-base-secondary)] px-4 py-3 font-normal">
          Kullandığın yazı tipi boyutunu, rengi ve arka planı yönet. Bu ayarlar,
          bu tarayıcıdaki tüm X hesaplarını etkiler.
        </p>
      </div>
      <div className="flex mt-2 ">
        <div>
          <div className=" ml-4 p-2 bg-black rounded-full text-[#fff]">
            <svg viewBox="0 0 24 24" width={25} height={25}>
              <path
                fill="currentColor"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </div>
        </div>

        <div className="ml-2 text-[color:var(--color-base)]">
          <div className="flex items-center">
            <div className="mr-0.5 font-bold">X</div>
            <div className="mr-1 ">
              <svg
                viewBox="0 0 22 22"
                width={18.75}
                height={18.75}
                className="ml-0.5"
              >
                <path
                  fill="#1d9bf0"
                  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                ></path>
              </svg>
            </div>
            <p className="mr-1 text-[color:var(--color-base-secondary)]">@X</p>
            <span className="px-1 font-bold text-[color:var(--color-base-secondary)]">
              ·
            </span>
            <div className=" text-[color:var(--color-base-secondary)]">10d</div>
          </div>
          <div className="font-normal leading-5 text-[color:var(--color-base)]">
            X'in merkezinde,tıpkı bunun gibi gönderi denen kısa mesajalr yatar.
            Gönderiler;fotoğraflar,videolar,bağlantılar,metinler,etiketler ve{" "}
            <Link to="/" className="text-[color:var(--color-primary)]">
              @X
            </Link>{" "}
            gibi bahsetmeler içerebilir
          </div>
        </div>
      </div>
      <div className="mt-4 border-b border-[color:var(--border-primary)]"></div>
      <p className="text-xl ml-4 mt-3 font-bold">Yazı tipi boyutu</p>
      <div> boyut ayarlama</div>
      <div className="mt-4 border-b border-[color:var(--border-primary)]"></div>
      <p className="text-xl ml-4 mt-3 font-bold">Renk</p>
      <div>
        <div className=" flex justify-center items-center gap-12 mt-2 py-1">
          <button
            onClick={() => {
              setColor({
                ...color,
                primary: "#1d9bf0",
              });
            }}
            className="h-10 w-10 rounded-full bg-[#1d9bf0] "
          ></button>
          <button
            onClick={() => {
              setColor({
                ...color,
                primary: "#ffd400",
              });
            }}
            className="h-10 w-10 rounded-full bg-[#ffd400]"
          ></button>
          <button
            onClick={() => {
              setColor({
                ...color,
                primary: "#f91880",
              });
            }}
            className="h-10 w-10 rounded-full bg-[#f91880]"
          ></button>
          <button
            onClick={() => {
              setColor({
                ...color,
                primary: "#7856ff",
              });
            }}
            className="h-10 w-10 rounded-full bg-[#7856ff]"
          ></button>
          <button
            onClick={() => {
              setColor({
                ...color,
                primary: "#ff7a00",
              });
            }}
            className="h-10 w-10 rounded-full bg-[#ff7a00]"
          ></button>
          <button
            onClick={() => {
              setColor({
                ...color,
                primary: "#00ba7c",
              });
            }}
            className="h-10 w-10 rounded-full bg-[#00ba7c]"
          ></button>
        </div>
      </div>
      <div className="mt-4 border-b border-[color:var(--border-primary)]"></div>
      <p className="text-xl ml-4 mt-3 font-bold">Arka plan</p>

      <div className=" flex justify-between gap-2 py-1 px-3 mt-3">
        {/* BEYAZ */}
        <button
          onClick={() => {
            setHover({
              base: "#0f14191a",
              baseSecondary: "#f7f9f9",
              baseAccount: "#f7f9f9",
            });
            setBorderColor({
              primary: "#eff3f4",
            });
            setColor({
              ...color,
              base: "#0f1419",
              baseSecondary: "#536471",
              logo: "#000",
              search: "#eff3f4",
            });
            setBackgroundColor({
              name: "light",
              primary: "#fff",
              alpha: "#ffffffa6",
              modal: "#0006",
              likes: "#eafaff",
            });
          }}
          className={classNames(
            "h-16 w-[191px] px-5 font-bold text-[#0f1419] bg-[#ffffff] border-2 border-transparent rounded",
            {
              "!border-[color:var(--color-primary)]":
                backgroundColor.name === "light",
            }
          )}
        >
          <div className="m-4  flex  ">
            <div className="ml-1">Varsayılan</div>
          </div>
        </button>
        {/* LOŞ */}
        <button
          onClick={() => {
            setHover({
              base: "#f7f9f91a",
              baseSecondary: "#ffffff08",
              baseAccount: "#ffffff08",
            });
            setBorderColor({
              primary: "#2f3336",
            });
            setColor({
              ...color,
              base: "#f7f9f9",
              baseSecondary: "#8b98a5",
              logo: "fff",
              search: "#273340",
            });
            setBackgroundColor({
              name: "darkBlue",
              primary: "#15202b",
              alpha: "#15202ba6",
              modal: "#5b708366",
              likes: "#02113d",
            });
          }}
          className={classNames(
            "h-16 w-[191px] px-5 font-bold text-[#f7f9f9] bg-[#15202b] border-2 border-transparent rounded",
            {
              "!border-[color:var(--color-primary)]":
                backgroundColor.name === "darkBlue",
            }
          )}
        >
          <div className="m-4  flex  ">
            <div className="ml-1">Loş</div>
          </div>
        </button>

        {/* DARK */}
        <button
          onClick={() => {
            setHover({
              base: "#f7f9f91a",
              baseSecondary: "#ffffff08",
              baseAccount: "#f7f9f91a",
            });
            setBorderColor({
              primary: "#2f3336",
            });
            setColor({
              ...color,
              base: "#e7e9ea",
              baseSecondary: "#71767b",
              logo: "fff",
              search: "#202327",
            });
            setBackgroundColor({
              name: "dark",
              primary: "#000",
              alpha: "#000000a6",
              modal: "#5b708366",
              likes: "#02113d",
            });
          }}
          className={classNames(
            "h-16 w-[191px] px-5 font-bold text-[#f7f9f9] bg-[#000] border-2 border-transparent rounded",
            {
              "!border-[color:var(--color-primary)]":
                backgroundColor.name === "dark",
            }
          )}
        >
          <div className="m-4  flex  ">
            <div className="ml-1">Işıklar kapalı</div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Appearance;
