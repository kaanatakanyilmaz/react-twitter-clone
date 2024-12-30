import Button from "../../components/button";
import { removeModal } from "../../store/modal/actions";
import { useAccount } from "../../store/auth/hooks";
function Works() {
  const account = useAccount();
  return (
    <div className="h-full w-full bg-[color:var(--background-primary)] text-[color:var(--color-base)]">
      <button
        onClick={() => removeModal()}
        className="flex items-center justify-center px-4 py-3"
      >
        <div className="hover:bg-[color:var(--hover-base)] p-2 rounded-full">
          <svg viewBox="0 0 24 24" width={20} height={20}>
            <path
              fill="currentColor"
              d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
            />
          </svg>
        </div>
      </button>
      <div className=" flex justify-center items-center px-6 py-6 ">
        <div className="p-4 w-[1280px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <svg viewBox="0 0 24 24" width={34} height={26}>
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </div>
            <div className="bg-[color:var(--hover-base)] px-4 py-1 rounded-full">
              <p className="font-bold">İş arama</p>
            </div>
            <button className="hover:bg-[color:var(--hover-base)] px-4 py-1 rounded-full">
              <p className="font-bold">Şirketler için</p>
            </button>
          </div>
          <div className="flex gap-3">
            <div className="text-[color:var(--color-base-secondary)] absolute top-[112px] right-[560px] z-10">
              <svg viewBox="0 0 24 24" width={28} height={16}>
                <path
                  fill="currentColor"
                  d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                />
              </svg>
            </div>
            <input
              placeholder="İlanlarda ara"
              className="  pl-8 bg-[color:var(--background-primary)] border border-[color:var(--border-primary)] rounded-full relative"
            ></input>
            <img
              src={account.avatar}
              alt=""
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[90px]">
        <div className="w-[1280px]">
          <div className="flex justify-center items-center gap-3 mb-12">
            <div>
              <div>
                <svg viewBox="0 0 24 24" width={45} height={45}>
                  <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-[34px] font-bold">Job Search</div>
          </div>
          <div className="flex items-center justify-center   gap-4">
            <input
              placeholder="Anahtar kelime"
              className=" w-[368px] pl-2 pb-2 mt-4 pt-4 border border-[color:var(--border-primary)] bg-[color:var(--background-primary)]"
            />
            <input
              placeholder="Konum"
              className=" w-[368px] pl-2 pb-2 mt-4 pt-4 border border-[color:var(--border-primary)] bg-[color:var(--background-primary)]"
            />

            <button className=" font-bold mt-2 py-3 px-8 bg-[color:var(--color-primary)] rounded-full">
              Ara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
