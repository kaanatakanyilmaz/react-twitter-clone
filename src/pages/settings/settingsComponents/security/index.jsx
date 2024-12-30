function Security() {
  return (
    <div className=" flex-1 py-3 font-bold ">
      <p className="text-xl ml-4">Güvenlik ve hesap erişimi</p>

      <div>
        <p className="mt-2 text-[13px] text-[color:var(--color-base-secondary)] px-4 py-3 font-normal">
          Hesabının güvenliğini yönet ve hesabına bağladığın uygulamalar dahil,
          hesabının kullanımını takip et.
        </p>
      </div>

      <button className="  w-full flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M14 13c0 .74-.4 1.39-1 1.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2zm3.5-6H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.38 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.88 7 17.5 7zM9 6.75c0-1.66 1.34-3 3-3s3 1.34 3 3V7H9v-.25zm9 11.75c0 .28-.22.5-.5.5h-11c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9z"
            />
          </svg>
        </div>

        <div className="flex flex-col text-left">
          <div>Güvenlik</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Hesabın güvenliğini yönet
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
              d="M19.5 2C20.88 2 22 3.12 22 4.5v11c0 1.21-.86 2.22-2 2.45V4.5c0-.28-.22-.5-.5-.5H6.05c.23-1.14 1.24-2 2.45-2h11zm-4 4C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11C2 7.12 3.12 6 4.5 6h11zM4 19.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5v11z"
            />
          </svg>
        </div>

        <div className="flex flex-col">
          <div>Uygulamalar ve oturumlar</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Hesabına ve hesabına bağlandığın uygulamalara giriş yaptığında buna
            ilişkin bilgileri gör.
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

      <button className=" w-full text-left flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z"
            />
          </svg>
        </div>

        <div className="flex flex-col">
          <div>Bağlı hesaplar</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Giriş yapmak için X'e bağlı Google veya Apple hesaplarını yönet
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

      <button className=" w-full text-left flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="w-full">Temsilci</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            ortak hesapları yönet
          </p>
        </div>
        <div className="  text-[color:var(--color-base-secondary)] ml-auto">
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

export default Security;
