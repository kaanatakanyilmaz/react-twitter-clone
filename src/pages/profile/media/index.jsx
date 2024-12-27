function Media() {
  return (
    <div>
      <div className="my-8 mx-auto px-8 max-w-[calc(400px)] w-full flex justify-center items-center">
        <div className="flex flex-col">
          <div className="mb-2 text-3xl font-bold leading-9 text-[color:var(--color-base)]">
            Işık, kamera… aksesuarlar!
          </div>
          <p className="mb-7 leading-5 text-[color:var(--color-base-secondary)]">
            Fotoğraf veya video içeren bir gönderi yayınladığında bu gönderi
            burada görüntülenir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Media;
