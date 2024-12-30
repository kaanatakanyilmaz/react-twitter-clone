function Subscriptions() {
  return (
    <div className=" border-[color:var(--border-primary)]">
      <div className=" flex-1 py-3 font-bold ">
        <p className="text-xl ml-4">İçerik Üreticisi Abonelikleri</p>
        <div className="mt-2 flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
          <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
            <svg viewBox="0 0 24 24" width={19} height={19}>
              <path
                fill="currentColor"
                d="M4.496 9.25c0-4.14 3.358-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.358 7.5-7.5 7.5-7.5-3.36-7.5-7.5zm7.5 9.5c-1.63 0-3.164-.41-4.505-1.13v5.82l4.498-1.87 4.502 1.87v-5.82c-1.338.72-2.869 1.13-4.495 1.13z"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <div>İçerik Üreticisi Aboneliklerini Yönet</div>
            <p className="text-[13px] text-[color:var(--color-base-secondary)] leading-4">
              İçerik üreticilerine aboneliklerini Stripe kullanarak aşağıdaki
              görüntüle ve yönet. İOS ya da Android işletim sisteminde
              başlattığın tüm aktif abonelikler uygulama içinde yönetilir.
            </p>
          </div>
          <div className="text-[color:var(--color-base-secondary)]">
            <svg viewBox="0 0 24 24" width={19} height={19}>
              <path
                fill="currentColor"
                d="M8 6h10v10h-2V9.41L5.957 19.46l-1.414-1.42L14.586 8H8V6z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
