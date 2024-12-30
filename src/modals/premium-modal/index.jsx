import { removeModal } from "../../store/modal/actions";

function PremiumModal() {
  return (
    <div className="bg-[color:var(--background-primary)] h-full w-full text-[color:var(--color-base)]">
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

      <div className="flex flex-col items-center justify-center">
        <div className=" px-4 py-3 text-6xl font-bold leading-10">
          <p>Premium'a yükselt</p>
        </div>
        <div className="px-4 py-6">
          <p>
            Gelişmiş bir deneyim, özel içerik üreticisi araçları, üst düzey
            doğrulama ve güvenlikten yararlanın.
          </p>
        </div>

        <div className=" px-3 py-1 bg-[color:var(--hover-base)] rounded-full">
          <button className=" px-3 py-1 bg-[color:var(--background-primary)] rounded-full">
            Aylık
          </button>
        </div>

        <div className="flex items-center">
          <div className=" mr-8 mt-10 bg-[color:var(--hover-base)] w-[330px] h-[433px] rounded-xl text-[color:var(--color-base)]">
            <div className="p-8">
              <div className="flex justify-center font-bold">Temel</div>

              <div className="text-4xl font-bold mt-4">
                ₺56,25 <span className="text-sm">/ay</span>
              </div>
              <div className="mt-2">Aylık olarak faturalandırlır</div>
              <div className="mt-4 ">
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
                  <p>Küçük yanıt artışı</p>
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
                  <p>Şifreli direkt mesajlar</p>
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
                  <p>Yer işaretleri klasörleri</p>
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
                  <p>Öne Çıkanlar sekmesi</p>
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
                  <p>Gönderiyi düzenle</p>
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
                  <p>Daha uzun videolar yayınla</p>
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
                  <p>Daha uzun göderiler</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 bg-[color:var(--hover-base)] w-[330px] h-[433px] rounded-xl text-[color:var(--color-base)]">
            <div className="p-8">
              <div className="flex justify-center font-bold">Temel</div>

              <div className="text-4xl font-bold mt-4">
                150,00 <span className="text-base">/ay</span>
              </div>
              <div className="mt-2">Aylık olarak faturalandırlır</div>
              <div className="mt-4">
                <div className="font-bold">Premium'da sunulan her şey ve</div>

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
                  <p>Daha büyük yanıt artışı</p>
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
                  <p>Gönderi yayınlayarak para kazan</p>
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
                  <p>Onay işareti</p>
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
                  <p>Grok 2 Yapay Zeka Asistanı</p>
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
                  <p>X Pro,Analytics,Media Studio</p>
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
                  <p>İçerik üreticisi Abonelikleri</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" ml-8 mt-10 bg-[color:var(--hover-base)] w-[330px] h-[433px]   rounded-xl text-[color:var(--color-base)]">
            <div className="p-8">
              <div className="flex justify-center font-bold">Premium</div>

              <div className="text-4xl font-bold mt-4">
                ₺770,00 <span className="text-base">/ay</span>
              </div>
              <div className="mt-2">Aylık olarak faturalandırlır</div>

              <div className="mt-4">
                <div className="font-bold">Premium'da sunulan her şey ve</div>
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
                  <p>Tamamen reklamsız</p>
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
                  <p>En büyük yanıt artışı</p>
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
                  <p>Makale Yaz</p>
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
                  <p>Radar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumModal;
