import Button from "../../../components/button";
function Articles() {
  return (
    <div>
      <div className="my-8 mx-auto px-8 max-w-[calc(400px)] w-full flex justify-center items-center">
        <div className="flex flex-col">
          <div className="mb-2 text-3xl font-bold leading-9 text-[color:var(--color-base)]">
            X'te Makale yaz
          </div>
          <p className="mb-7 leading-5 text-[color:var(--color-base-secondary)]">
            X'te Makale yazmak için Premium+ abonesi olman gerekir
          </p>
          <Button size="whiteLarge">Premium+ kademesine yükselt</Button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
