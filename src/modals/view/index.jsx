import Button from "../../components/button";
import { removeModal } from "../../store/modal/actions";

export default function View() {
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
        </div>
        <div className="w-[600px] flex justify-center items-center">
          <div className="m-8 max-w-[400px]">
            <div className="mb-8">
              <p className="text-2xl font-bold mb-2 leading-8 text-[color:var(--color-base)]">
                Görüntülenmeler
              </p>

              <p className="text-[color:var(--color-base-secondary)] leading-5 font-normal">
                Bu gönderinin görülme sayısı. Daha fazla bilgi almak için
                <a
                  href="https://help.x.com/tr/using-x/view-counts"
                  className="underline text-[color:var(--color-base)] font-bold"
                >
                  Yardım Merkezi
                </a>
                'ni ziyaret et.
              </p>
            </div>

            <div className=" ">
              <div className=" ">
                <Button size="whiteLarge" onClick={() => removeModal()}>
                  Gizle
                </Button>
              </div>
            </div>
            <div className="h-[53px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
