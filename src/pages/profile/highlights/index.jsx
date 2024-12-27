import Button from "../../../components/button";
function Highlights() {
  return (
    <div>
      <div className="my-8 mx-auto px-8 max-w-[calc(400px)] w-full flex justify-center items-center">
        <div className="flex flex-col">
          <div className="mb-2 text-3xl font-bold leading-9 text-[color:var(--color-base)]">
            Profilinde öne çıkar
          </div>
          <p className="mb-7 leading-5 text-[color:var(--color-base-secondary)]">
            Profilinde gönderileri öne çıkarmak için Premium abonesi olman
            gerekir.
          </p>
          <Button size="whiteLarge">Premium'a Abone Ol</Button>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
