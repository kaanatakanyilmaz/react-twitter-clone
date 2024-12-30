import React, { useState } from "react";
import SettingsRightBar from "./SettingsRightBar";

function Settings() {
  const [selectedOption, setSelectedOption] = useState("creatorSubscriptions");

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    // Tıklanan butona göre state'i günceller
  };

  return (
    <div className="flex  text-[color:var(--color-base)]">
      <div>
        <div className="px-4 py-3 font-bold text-xl">Ayarlar</div>
        <div className="flex items-center mb-3">
          <div className="mx-3 p-2 hover:bg-[--hover-base] rounded-full">
            <svg
              viewBox="0 0 24 24"
              height={20}
              width={20}
              className="text-[color:var(--color-base)]"
            >
              <path
                fill="currentColor"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
          </div>
          <div className="flex">
            <label className="relative flex items-center justify-center w-[380px]  ">
              <button className="w-[56px] h-full flex items-center justify-center absolute top-0 -left-1 pointer-events-none ">
                <svg
                  viewBox="0 0 24 24"
                  className="w-[19px] h-[19px] text-[color:var(--color-base-secondary)] "
                >
                  <path
                    fill="currentColor"
                    d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="py-2 pl-[40px] w-full bg-[color:var(--background-primary)]  border border-[color:var(--border-primary)]  outline-none rounded-full text-[15px] placeholder-[color:var(--color-base-secondary)] focus-within:border-[#1d9bf0]  "
                placeholder="Ayarlarda Ara"
                // value={filter}
                // onChange={(e) => setFiltered(e.target.value)}
              />
            </label>
          </div>
        </div>

        <button
          className="flex items-center"
          onClick={() => handleButtonClick("creatorSubscriptions")}
        >
          <div className="flex items-center overflow-hidden hover:bg-[color:var(--hover-base)] px-4 py-3">
            <div className="w-[385px] text-left">
              İçerik Üreticisi Abonelikleri
            </div>
            <div>
              <svg
                viewBox="0 0 24 24"
                width={30}
                height={18}
                className="text-[color:var(--color-base-secondary)]"
              >
                <path
                  fill="currentColor"
                  d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
                />
              </svg>
            </div>
          </div>
        </button>
        <button
          className="flex items-center"
          onClick={() => handleButtonClick("security")}
        >
          <div className="flex items-center overflow-hidden hover:bg-[color:var(--hover-base)] px-4 py-3">
            <div className="w-[385px] text-left">Güvenlik ve hesap erişimi</div>
            <div>
              <svg
                viewBox="0 0 24 24"
                width={30}
                height={18}
                className="text-[color:var(--color-base-secondary)]"
              >
                <path
                  fill="currentColor"
                  d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
                />
              </svg>
            </div>
          </div>
        </button>
        <button
          className="flex items-center"
          onClick={() => handleButtonClick("private")}
        >
          <div className="flex items-center overflow-hidden hover:bg-[color:var(--hover-base)] px-4 py-3">
            <div className="w-[385px] text-left">Gizlilik ve güvenlik</div>
            <div>
              <svg
                viewBox="0 0 24 24"
                width={30}
                height={18}
                className="text-[color:var(--color-base-secondary)]"
              >
                <path
                  fill="currentColor"
                  d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
                />
              </svg>
            </div>
          </div>
        </button>
        <button
          className="flex items-center"
          onClick={() => handleButtonClick("notifications")}
        >
          <div className="flex items-center overflow-hidden hover:bg-[color:var(--hover-base)] px-4 py-3">
            <div className="w-[385px] text-left">Bildirimler</div>
            <div>
              <svg
                viewBox="0 0 24 24"
                width={30}
                height={18}
                className="text-[color:var(--color-base-secondary)]"
              >
                <path
                  fill="currentColor"
                  d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
                />
              </svg>
            </div>
          </div>
        </button>
        <button
          className="flex items-center"
          onClick={() => handleButtonClick("appearance")}
        >
          <div className="flex items-center overflow-hidden hover:bg-[color:var(--hover-base)] px-4 py-3">
            <div className="w-[385px] text-left">Görünüm</div>
            <div>
              <svg
                viewBox="0 0 24 24"
                width={30}
                height={18}
                className="text-[color:var(--color-base-secondary)]"
              >
                <path
                  fill="currentColor"
                  d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
                />
              </svg>
            </div>
          </div>
        </button>
        <button
          className="flex items-center"
          onClick={() => handleButtonClick("settings")}
        >
          <div className="flex items-center overflow-hidden hover:bg-[color:var(--hover-base)] px-4 py-3">
            <div className="w-[385px] text-left">Ek kaynaklar</div>
            <div>
              <svg
                viewBox="0 0 24 24"
                width={30}
                height={18}
                className="text-[color:var(--color-base-secondary)]"
              >
                <path
                  fill="currentColor"
                  d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <SettingsRightBar selectedOption={selectedOption} />
    </div>
  );
}

export default Settings;
