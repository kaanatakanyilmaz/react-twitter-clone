import { removeModal } from "../../store/modal/actions";
import { useAccount } from "../../store/auth/hooks";
import Button from "../../components/button";
export default function Comment() {
  const account = useAccount();
  return (
    <div>
      <div className="max-w-[600px] w-full max-h-[535px] h-full bg-[color:var(--background-primary)] rounded-2xl mx-auto">
        <div className=" flex justify-between  pt-2 px-4 leading-5">
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
          <button className="hover:bg-[#1d9bf01a]   px-4 py-2 rounded-full  flex justify-center items-center transition-colors">
            <p className="font-bold text-[color:var(--color-primary)]">
              Taslaklar
            </p>
          </button>
        </div>

        <div className="px-4">
          <div className="flex flex-col justify-center  gap-4 ">
            <div className="flex flex-wrap w-[519px]">
              <div className=" pt-3">
                <img
                  src={account.avatar}
                  className="w-10 h-10 rounded-full "
                  alt=""
                />
              </div>
              <textarea
                type="text"
                placeholder="Yanıtını gönder"
                className=" leading-5 mt-3 text-xl outline-none  bg-[color:var(--background-primary)] border border-transparent px-4 h-[96px]  text-[color:var(--color-base)] flex items-center justify-start w-[450px] "
              />
            </div>

            <div className="flex  flex-row justify-between gap-8 ">
              <div className="mb-1 text-[color:var(--color-primary)]">
                <button className="border border-transparent rounded-full p-2 hover:bg-[#1d9bf01a]">
                  <svg viewBox="0 0 24 24" width={18} height={18} className="">
                    <path
                      fill="currentColor"
                      d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"
                    />
                  </svg>
                </button>
                <button className="border border-transparent rounded-full p-2 hover:bg-[#1d9bf01a]">
                  <svg viewBox="0 0 24 24" width={18} height={18} className="">
                    <path
                      fill="currentColor"
                      d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"
                    />
                  </svg>
                </button>
                <button className="border border-transparent rounded-full p-2 hover:bg-[#1d9bf01a]">
                  <svg viewBox="0 0 24 24" width={18} height={18} className="">
                    <path
                      fill="currentColor"
                      d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"
                    />
                  </svg>
                </button>
                <button className="border border-transparent rounded-full p-2 hover:bg-[#1d9bf01a]">
                  <svg viewBox="0 0 24 24" width={18} height={18} className="">
                    <path
                      fill="currentColor"
                      d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"
                    />
                  </svg>
                </button>
                <button className="border border-transparent rounded-full p-2 hover:bg-[#1d9bf01a]">
                  <svg viewBox="0 0 24 24" width={18} height={18} className="">
                    <path
                      fill="currentColor"
                      d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"
                    />
                  </svg>
                </button>
              </div>
              <Button size="whiteNormal">Yanıtla</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
