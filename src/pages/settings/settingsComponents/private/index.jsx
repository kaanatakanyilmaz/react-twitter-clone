import React from "react";

function Private() {
  return (
    <div className=" flex-1 py-3 font-bold ">
      <p className="text-xl ml-4">Gizlilik ve güvenlik</p>

      <div>
        <p className="mt-2 text-[13px] text-[color:var(--color-base-secondary)] px-4 py-3 font-normal">
          X'te gördüğün ve paylaştığın bilgileri yönet.
        </p>
      </div>

      <button className="  w-full flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M12 5c-.83 0-1.5.67-1.5 1.5S11.17 8 12 8s1.5-.67 1.5-1.5S12.83 5 12 5zM8.5 6.5C8.5 4.57 10.07 3 12 3s3.5 1.57 3.5 3.5S13.93 10 12 10 8.5 8.43 8.5 6.5zm-3.25 1c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm-2.75.75c0-1.52 1.23-2.75 2.75-2.75S8 6.73 8 8.25 6.77 11 5.25 11 2.5 9.77 2.5 8.25zm16.25-.75c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zM16 8.25c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75S20.27 11 18.75 11 16 9.77 16 8.25zM12 13c-1.29 0-2.37.54-3.22 1.61C8 15.6 7.4 17.07 7.12 19h9.76c-.27-1.85-.83-3.28-1.57-4.28C14.45 13.58 13.34 13 12 13zm-4.78.36C8.41 11.86 10.06 11 12 11c2.02 0 3.7.92 4.91 2.53 1.18 1.57 1.88 3.77 2.09 6.39l.08 1.08H4.92L5 19.92c.22-2.7.96-4.97 2.22-6.56zM2.95 16c.16-.55.39-.97.66-1.28.4-.46.94-.72 1.64-.72v-2c-1.26 0-2.35.49-3.15 1.4-.78.89-1.22 2.11-1.35 3.51L.65 18H4v-2H2.95zm18.95-2.6c.78.89 1.22 2.11 1.35 3.51l.1 1.09H20v-2h1.05c-.16-.55-.39-.97-.66-1.28-.4-.46-.94-.72-1.64-.72v-2c1.26 0 2.35.49 3.15 1.4z"
            />
          </svg>
        </div>

        <div className="flex flex-col text-left">
          <div>Hedef kitle,medya ve etiketleme</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            X'teki diğer kullanıcıların görmesine izin verdiğin bilgilerini
            yönet.
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
              d="M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z"
            />
          </svg>
        </div>

        <div className="flex flex-col">
          <div>Gönderilerin</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Gönderilerinle ilişkilendirilen bilgilerini yönet.
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
              d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"
            />
          </svg>
        </div>

        <div className="flex flex-col">
          <div>Sessize alma ve engelleme</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Sessize aldığın veya engellediğin hesapları, kelimeleri ve
            bildirimleri yönet.
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
              d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="w-full">Direkt Mesajlar</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Sana kimlerin direkt mesaj gönderebileceğini yönet.
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
      <button className=" w-full text-left flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M12 22.25c-4.99 0-9.18-3.393-10.39-7.994l1.93-.512c.99 3.746 4.4 6.506 8.46 6.506s7.47-2.76 8.46-6.506l1.93.512c-1.21 4.601-5.4 7.994-10.39 7.994zM5 11.5c0 3.866 3.13 7 7 7s7-3.134 7-7V8.75c0-3.866-3.13-7-7-7s-7 3.134-7 7v2.75zm12-2.75v2.75c0 2.761-2.24 5-5 5s-5-2.239-5-5V8.75c0-2.761 2.24-5 5-5s5 2.239 5 5zM11.25 8v4.25c0 .414.34.75.75.75s.75-.336.75-.75V8c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm-3 1v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9c0-.414-.34-.75-.75-.75s-.75.336-.75.75zm7.5 0c0-.414-.34-.75-.75-.75s-.75.336-.75.75v2.25c0 .414.34.75.75.75s.75-.336.75-.75V9z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="w-full">Sohbet Odaları</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Sohbet Odalarında dinleme etkinliğini kimlerin görebileceğini yönet.
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
      <button className=" w-full text-left flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M11 4c-3.87 0-7 3.13-7 7s3.13 7 7 7c1.93 0 3.68-.78 4.95-2.05S18 12.93 18 11c0-3.87-3.13-7-7-7zm-9 7c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.12-.74 4.08-1.97 5.62l3.68 3.67-1.41 1.42-3.68-3.68C15.08 19.26 13.13 20 11 20c-4.97 0-9-4.03-9-9zm11.5-2.5c0 1.38-1.12 2.5-2.5 2.5S8.5 9.88 8.5 8.5 9.62 6 11 6s2.5 1.12 2.5 2.5zm-6.76 5.97C7.58 12.89 9.07 12 11 12s3.42.89 4.26 2.47c-1 1.24-2.54 2.03-4.26 2.03s-3.26-.79-4.26-2.03z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="w-full">Bulunabilirlik ve kişiler</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Bulunabilirlik ayarlarını kontrol et ve içe aktardığın kişileri
            yönet.
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

      <div className="border-b border-[color:var(--border-primary)]"></div>

      <p className="text-xl ml-4 mt-3">Veri paylaşımı ve kişiselleştirme</p>

      <button className="  mt-2 w-full flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"
            />
          </svg>
        </div>

        <div className="flex flex-col text-left">
          <div>Reklam tercihleri</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            X'teki reklam deneyimini yönet.
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
              d="M9.53 4c.41.01.77.28.91.66l4.14 11.6L16.84 11H22v2h-3.84l-2.74 6.39c-.16.38-.54.62-.95.61s-.77-.28-.91-.66L9.42 7.74 7.16 13H2v-2h3.84l2.74-6.39c.16-.38.54-.62.95-.61z"
            />
          </svg>
        </div>

        <div className="flex flex-col">
          <div>Çıkarıma dayalı kimlik</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Çıkarıma dayalı etkinliğine (ör. X platformuna giriş yapmak için
            kullanmadığın cihazlardaki etkinlik) bağlı olarak X uygulamasının
            deneyimini kişiselleştirmesine izin ver.
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
          <div>İş ortaklarıyla veri paylaşma</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            X'in iş ortaklarıyla ek bilgi paylaşımına izin ver.
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
              d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="w-full">Konum bilgisi</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            X'in deneyimini kişiselleştirmek için kullandığı konum bilgilerini
            yönet.
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
      <button className=" w-full text-left flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className=" p-4 flex justify-center items-center mr-4 text-[color:var(--color-base-secondary)]">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"
            />
            <path
              fill="currentColor"
              d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="w-full">Grok ve Üçüncü Taraf İş Birlikleri</div>
          <p className="text-[13px] text-[color:var(--color-base-secondary)]">
            Herkese açık verilerinin yanı sıra Grok ve xAI ile etkileşimlerinin,
            girişlerinin ve sonuçlarının eğitim ve ince ayar için kullanılmasına
            izin ver
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
      <div className=" border-b border-[color:var(--border-primary)]"></div>

      <p className="text-xl ml-4 mt-3">
        X'teki gizlilik hakkında daha fazla bilgi al
      </p>

      <button className="  mt-2 w-full flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className="flex flex-col text-left">
          <div>Reklam tercihleri</div>
        </div>
        <div className="text-[color:var(--color-base-secondary)] ml-auto">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M8 6h10v10h-2V9.41L5.957 19.46l-1.414-1.42L14.586 8H8V6z"
            />
          </svg>
        </div>
      </button>
      <button className="  mt-2 w-full flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className="flex flex-col text-left">
          <div>Gizlilik politikası</div>
        </div>
        <div className="text-[color:var(--color-base-secondary)] ml-auto">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M8 6h10v10h-2V9.41L5.957 19.46l-1.414-1.42L14.586 8H8V6z"
            />
          </svg>
        </div>
      </button>
      <button className="  mt-2 w-full flex font-normal items-center px-4 py-3 hover:bg-[color:var(--hover-base)]">
        <div className="flex flex-col text-left">
          <div>Bize ulaşın</div>
        </div>
        <div className="text-[color:var(--color-base-secondary)] ml-auto">
          <svg viewBox="0 0 24 24" width={19} height={19}>
            <path
              fill="currentColor"
              d="M8 6h10v10h-2V9.41L5.957 19.46l-1.414-1.42L14.586 8H8V6z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Private;
