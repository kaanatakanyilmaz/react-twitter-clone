function Notifications() {
  return (
    <div className=" flex-1 py-3 font-bold ">
      <p className="text-xl ml-4">Bildirimler</p>

      <div>
        <p className="mt-2 text-[13px] text-[color:var(--color-base-secondary)] px-4 py-3 font-normal">
          Etkinliklerin, ilgi alanların ve önerilerin hakkında aldığın bildirim
          türlerini seç.
        </p>
      </div>

      <button className="  w-full flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z"
            />
          </svg>
        </div>

        <div className="flex flex-col text-left">
          <div>Filtreler</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Görmek istediğin ve istemediğin bildirimleri seç.
          </p>
        </div>
        <div className="text-[color:var(--color-base-secondary)] ml-auto">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
            />
          </svg>
        </div>
      </button>

      <button className="  w-full text-left flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M7 17h6v2H7v-2zm7.5-15C15.88 2 17 3.12 17 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-9C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h9zM5 19.5c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5v15zm15.74-3.49l1.64 1.15C23.4 15.7 24 13.92 24 12s-.6-3.7-1.62-5.16l-1.64 1.15C21.53 9.13 22 10.51 22 12s-.47 2.87-1.26 4.01zm-.82-7.45l-1.64 1.15c.45.65.72 1.43.72 2.29 0 .85-.27 1.64-.72 2.29l1.64 1.15C20.6 14.47 21 13.28 21 12s-.4-2.47-1.08-3.44z"
            />
          </svg>
        </div>

        <div className="flex flex-col">
          <div>Tercihler</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Bildirim türüne göre tercihlerini seç.
          </p>
        </div>
        <div className="text-[color:var(--color-base-secondary)] ml-auto">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Notifications;
