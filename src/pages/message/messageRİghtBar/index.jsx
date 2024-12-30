import Button from "../../../components/button";

function MessageRightBar() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" my-4 px-8 text-centera text-left">
        <h6 className="mb-2 px-8 leading-9 text-3xl font-bold text-[color:var(--color-base)]">
          Mesaj seç
        </h6>
        <p className="mb-7 px-8 text-left leading-5 text-sm text-[color:var(--color-base-secondary)]">
          Mevcut sohbetlerin arasından seçim yap, yeni bir sohbet başlat veya
          sörfe devam et.
        </p>
        <div className="flex justify-start items-center ml-8">
          <Button size="blueNormal">Mesaj yaz</Button>
        </div>
      </div>
    </div>
  );
}

export default MessageRightBar;
