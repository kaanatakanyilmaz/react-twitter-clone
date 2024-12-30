import Button from "../../../../components/button";
function Premium() {
  return (
    <div className="h-[182px] ">
      <div className="h-[166px] mb-4 border   border-[color:var(--border-primary)]  rounded-2xl py-3 px-4 flex flex-col gap-2.5">
        <h6 className="font-bold text-xl leading-6 font-extrabold text-[color:var(--color-base)]">
          Premium'a Abone Ol
        </h6>
        <p className="leading-5 text-[15px] text-[color:var(--color-base)]">
          Yeni özellikleri açmak için abone ol ve uygun olman durumunda içbrik
          üreticisi gelir payı kazan.
        </p>
        <div>
          <Button
            size={"whiteNormal"}
            className="bg-[color:var(--color-primary)] px-4 py-2 rounded-full font-bold"
          >
            Abone ol
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Premium;
