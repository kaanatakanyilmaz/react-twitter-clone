import { removeModal } from "../../store/modal/actions";
import Button from "../../components/button";
function VerifiedModal() {
  return (
    <div className="bg-[color:var(--background-primary)]  text-[color:var(--color-base)] h-full w-full ">
      <div className="px-6 py-6">
        <button
          onClick={() => removeModal()}
          className="flex items-center justify-center"
        >
          <div className="hover:bg-[color:var(--hover-base)] p-2 rounded-full">
            <svg viewBox="0 0 24 24" width={20} height={20}>
              <path
                fill="currentColor"
                d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
              ></path>
            </svg>
          </div>
        </button>
      </div>

      <div className="flex items-center justify-center mb-2">
        <div>
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]">
            <path
              fill="currentColor"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </div>
        <div className="ml-2 font-bold">Kuruluşlar</div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className=" px-4 py-3 text-6xl font-bold leading-10">
          <div className="flex flex-col items-center">
            <p>İşini büyütmek </p>
            <p className="mt-6"> için en iyi platform</p>
          </div>
        </div>
        <div className="px-4 py-6 text-[color:var(--color-base-secondary)] font-bold">
          <p>
            Satışları artırmak, en iyi adayları işe almak ve özel pazar
            analizlerine erişmek için en güçlü araçlar.
          </p>
        </div>

        <div className=" px-3 py-1 bg-[color:var(--hover-base)] rounded-full">
          <button className=" px-3 py-1 bg-[color:var(--background-primary)] rounded-full">
            Aylık
          </button>
        </div>

        <div className="flex items-center">
          <div className=" mt-10 bg-[color:var(--hover-base)] w-[360px] h-[500px] rounded-xl text-[color:var(--color-base)]">
            <div className="p-8">
              <div className="flex font-bold text-xl">Temel</div>

              <div className="text-4xl font-bold mt-4">
                ₺4.858,33
                <span className="text-base">/ay</span>
              </div>
              <div className="mt-2 mb-2">Aylık olarak faturalandırlır</div>

              <Button size="whiteLarge">Basic'i edin</Button>
              <div className="mt-4">
                <div>Şunlar dahildir:</div>

                <div className="flex items-center mb-2 mt-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>Altın renkli Onaylanmış rozeti</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>2.400 $'a varan reklam kredisi</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>Organik iş ilanları</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>İş ilanı tanıtma özellikleri</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>Radar Basic</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>Premium+ avantajları</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>Öncelikli Destek</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-8 mt-10 bg-[color:var(--hover-base)] w-[360px] h-[500px] rounded-xl text-[color:var(--color-base)]">
            <div className="p-8">
              <div className="flex font-bold text-xl">Tam erişim</div>

              <div className="text-4xl font-bold mt-4">
                ₺16.041,67
                <span className="text-base">/ay</span>
              </div>
              <div className="mt-2 mb-2">Aylık olarak faturalandırlır</div>

              <Button size="whiteLarge">Tam Erişim elde et</Button>
              <div className="mt-4">
                <div>Basic planındaki her şeye ek olarak:</div>

                <div className="flex items-center mb-2 mt-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>İlişkili hesaplar</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>12.000 $'a varan reklam kredisi</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>Radar'a Tam Erişim</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>VIP Destek</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    className="mr-1"
                  >
                    <path
                      fill="currentColor"
                      d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                    />
                  </svg>
                  <p>Enterprise özelliklerine erken erişim</p>
                </div>
                <div className="mt-8">
                  <p className="text-[11px] text-[color:var(--color-base-secondary)]">
                    Her ek ilişkili hesabın kullanıcı adı başına aylık ücreti 50
                    $'dır ve reklam kredileri kısıtlamalara tabidir.{" "}
                    <a
                      href="https://help.x.com/en/using-x/verified-organizations#verifiedorgs-pricing"
                      target="_blank"
                      className="text-[color:var(--color-primary)]"
                    >
                      Daha fazla bilgi al
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifiedModal;
