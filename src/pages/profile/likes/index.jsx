function Likes() {
  return (
    <div>
      <div className="py-[0.75rem] px-[0.30rem]">
        <div className="py-3 px-4 flex flex-wrap bg-[color:var(--background-likes)] text-[color:var(--color-base)] rounded-lg">
          <div className="">
            <svg viewBox="0 0 24 24" width={19} height={19}>
              <path
                fill="currentColor"
                d="M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z"
              />
            </svg>
          </div>
          <p className="text-sm ml-2">
            Beğenilerin gizlidir. Yalnızca sen görebilirsin.
          </p>
        </div>
      </div>
      <div className="my-8 mx-auto px-8 max-w-[calc(400px)] w-full flex justify-center items-center">
        <div className="flex flex-col">
          <div className="mb-2 text-3xl font-bold leading-9 text-[color:var(--color-base)]">
            Henüz hiç beğenin yok
          </div>
          <p className="mb-7 leading-5 text-[color:var(--color-base-secondary)]">
            Ona biraz sevgi göstermek için herhangi bir gönderi üzerindeki kalbe
            dokun. Dokunduğun zaman, burada görünür.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Likes;
