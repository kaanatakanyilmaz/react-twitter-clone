import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import { numberFormat } from "../../utils/format";
import { setModal } from "../../store/modal/actions";

export default function Post({ post }) {
  return (
    <div
      to="/"
      className=" px-4 border-b border-[color:var(--border-primary)] flex mt-3 w-full hover:bg-[color:var(--hover-base-secondary)] "
    >
      <img src={post.account.avatar} className="w-10 h-10 rounded-full mr-2" />
      <div className="flex-1">
        <div className="mb-0.5  w-auto flex  items-center justify-between ">
          <div className="flex  items-center gap-2 ">
            <p className="font-bold flex items-center hover:underline">
              {post.account.fullName}
              {post.account.verified && (
                <svg
                  viewBox="0 0 22 22"
                  width={18.75}
                  height={18.75}
                  className="ml-0.5"
                >
                  <path
                    fill="#1d9bf0"
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  ></path>
                </svg>
              )}
              {post.account.verifiedPlus && (
                <svg
                  viewBox="0 0 22 22"
                  width={18.75}
                  height={18.75}
                  className="ml-0.5"
                >
                  <path
                    fill="#e8c434"
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  ></path>
                </svg>
              )}
            </p>
            <div className="text-[color:var(--color-base-secondary)] ">
              @{post.account.username} <span className="px-1 font-bold">·</span>
              {post.stats.date}
            </div>
          </div>
          <Popover className="relative">
            <PopoverButton
              className={
                " outline-none w-[34.75px] h-[34.75px] text-[color:var(--color-base-secondary)] rounded-full  flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-colors"
              }
            >
              <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                <path
                  fill="currentColor"
                  d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                ></path>
              </svg>
            </PopoverButton>

            <PopoverPanel className="w-[384px] absolute top-2 right-0  border-[color:var(--border-primary)] bg-[color:var(--background-primary)]  shadow-box rounded-xl z-[2] transition-colors">
              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                  ></path>
                </svg>
                <p className="pl-3 font-bold"> Bu gönderi ilgimi çekmiyor</p>
              </div>
              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm12.586 3l-2.043-2.04 1.414-1.42L20 7.59l2.043-2.05 1.414 1.42L21.414 9l2.043 2.04-1.414 1.42L20 10.41l-2.043 2.05-1.414-1.42L18.586 9zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z"
                  ></path>
                </svg>
                <p className="pl-3 font-bold">
                  @{post.account.username} adlı kişiyi takibi bırak
                </p>
              </div>
              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm4 7c-1.84 0-3.32.65-4.4 1.81-.93.98-1.61 2.39-1.95 4.19h5.85v2H3.4l.1-1.1c.27-2.66 1.16-4.88 2.64-6.46C7.63 11.85 9.65 11 12 11c.91 0 1.78.13 2.58.38l-.9 1.82c-.52-.13-1.08-.2-1.68-.2zm5-2l1.76 3.57 3.95.58-2.86 2.78.68 3.92L17 20l-3.53 1.85.68-3.92-2.86-2.78 3.95-.58L17 11z"
                  />
                </svg>

                <p className="pl-3 font-bold">
                  @{post.account.username} adlı kişiyi kullanıcıyı Abone ol
                </p>
              </div>
              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5H12v2H5.5C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5V13h-2V4.5c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2zm10 7v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"
                  ></path>
                </svg>
                <p className="pl-3 font-bold">
                  @{post.account.username} kullanıcısını listelere ekle/
                  listelerden kaldır
                </p>
              </div>
              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"
                  ></path>
                </svg>
                <p className="pl-3 font-bold">
                  @{post.account.username} adlı kişiyi sessize al
                </p>
              </div>

              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"
                  ></path>
                </svg>
                <p className="pl-3 font-bold">
                  @{post.account.username} adkı kişiyi engelle
                </p>
              </div>
              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                  ></path>
                </svg>
                <p className="pl-3 font-bold">
                  gönderi etkileşimlerini görüntüle
                </p>
              </div>
              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z"
                  ></path>
                </svg>
                <p className="pl-3 font-bold"> gönderi öğesini yerleştir</p>
              </div>

              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"
                  ></path>
                </svg>
                <p className="pl-3 font-bold">
                  gönderi adlı kullanıcıyı bildir
                </p>
              </div>

              <div className="flex items-center  px-4 py-3 text-[15px] leading-5 font-bold text-left hover:bg-[color:var(--hover-base-secondary)]">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path
                    fill="currentColor"
                    d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"
                  ></path>
                </svg>
                <p className="pl-3 font-bold"> Topluluk Notu iste</p>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
        <div>
          <p className="leading-5 w-full">{post.content}</p>
        </div>
        <img src={post.photos} alt="" className="mt-3 w-full rounded-2xl" />

        <div className="flex items-center mt-1 ">
          <button
            onClick={() => setModal("comment")}
            className=" max-w-[114px] w-full text-[color:var(--color-base-secondary)] flex items-center gap-1 hover:text-[#1d9bf0] "
          >
            <div className="hover:bg-[#1d9bf01a] rounded-full p-2 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 ">
                <path
                  fill="currentColor"
                  d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                />
              </svg>
            </div>
            {post?.stats.comments && (
              <div className="text-[13px] -ml-2">
                {numberFormat(post.stats.comments)}
              </div>
            )}
          </button>
          <div className="max-w-[114px] w-full  flex items-center gap-1 ">
            <Popover className="relative">
              <PopoverButton>
                <div className=" flex items-center text-[color:var(--color-base-secondary)] gap-1 hover:text-[#00ba7c]  ">
                  <div className="hover:bg-[#00ba7c1a] rounded-full p-2 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 ">
                      <path
                        fill="currentColor"
                        d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                      />
                    </svg>
                  </div>
                  {post?.stats.comments && (
                    <div className="text-[13px] -ml-2">
                      {numberFormat(post.stats.repost)}
                    </div>
                  )}
                </div>
              </PopoverButton>
              <PopoverPanel className=" w-[175px] border-[color:var(--border-primary)] text-[color:var(--color-base)] bg-[color:var(--background-primary)]  rounded-xl  gap-2 absolute  top-2 right-0 shadow-box">
                <div className=" flex flex-wrap items-center  py-3 px-4 text-[14px] text-left hover:bg-[color:var(--hover-base-secondary)]">
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                    <path
                      fill="currentColor"
                      d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                    />
                  </svg>
                  <p className=" font-bold pl-4"> Yeniden gönder</p>
                </div>
                <div className="  flex flex-wrap items-center py-3 px-4  text-[14px] text-left hover:bg-[color:var(--hover-base-secondary)]">
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                    <path
                      fill="currentColor"
                      d="M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z"
                    />
                  </svg>
                  <p className=" font-bold pl-3">Alıntı</p>
                </div>
              </PopoverPanel>
            </Popover>
          </div>

          <div className=" max-w-[114px] w-full text-[color:var(--color-base-secondary)] flex items-center gap-1 hover:text-[#f91880] ">
            <div className="hover:bg-[#f918801a] rounded-full p-2 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 ">
                <path
                  fill="currentColor"
                  d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                />
              </svg>
            </div>

            {post?.stats.comments && (
              <div className="text-[13px] -ml-2">
                {numberFormat(post.stats.like)}
              </div>
            )}
          </div>
          <div
            onClick={() => setModal("view")}
            className=" max-w-[114px] w-full text-[color:var(--color-base-secondary)] flex items-center gap-1 hover:text-[#1d9bf0] "
          >
            <div className="hover:bg-[#1d9bf01a] rounded-full p-2 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 ">
                <path
                  fill="currentColor"
                  d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                />
              </svg>
            </div>

            {post?.stats.comments && (
              <div className="text-[13px] -ml-2">
                {numberFormat(post.stats.view)}
              </div>
            )}
          </div>

          <div className="flex items-center justify-end ">
            <div className=" max-w-[114px] w-full text-[color:var(--color-base-secondary)] flex items-center justify-end hover:text-[#1d9bf0] ">
              <div className="hover:bg-[#1d9bf01a] rounded-full p-2 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 ">
                  <path
                    fill="currentColor"
                    d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
                  />
                </svg>
              </div>
            </div>

            <div className="max-w-[114px] w-full  flex items-center gap-1 ">
              <Popover className="relative">
                <PopoverButton>
                  <div className=" flex items-center text-[color:var(--color-base-secondary)] gap-1 hover:text-[#1d9bf0]  ">
                    <div className="hover:bg-[#1d9bf01a] rounded-full p-2 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 ">
                        <path
                          fill="currentColor"
                          d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                        />
                      </svg>
                    </div>
                  </div>
                </PopoverButton>
                <PopoverPanel className="  w-[260px] border-[color:var(--border-primary)] text-[color:var(--color-base)] bg-[color:var(--background-primary)]  rounded-xl  z-[3] gap-2 absolute  top-2 right-0 shadow-box overflow-hidden">
                  <div className=" flex flex-wrap items-center  py-3 px-4 text-[14px] text-left hover:bg-[color:var(--hover-base-secondary)] ">
                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                      <path
                        fill="currentColor"
                        d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
                      />
                    </svg>
                    <p className=" font-bold pl-4"> Bağlantıyı kopyala</p>
                  </div>
                  <div className=" flex flex-wrap items-center  py-3 px-4 text-[14px] text-left hover:bg-[color:var(--hover-base-secondary)]">
                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                      <path
                        fill="currentColor"
                        d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                      />
                    </svg>
                    <p className=" font-bold pl-4">
                      Gönderiyi şununla paylaş …
                    </p>
                  </div>
                  <div className=" flex flex-wrap items-center  py-3 px-4 text-[14px] text-left hover:bg-[color:var(--hover-base-secondary)]">
                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                      <path
                        fill="currentColor"
                        d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
                      />
                    </svg>
                    <p className=" font-bold pl-4"> Direkt Mesaj ile gönder</p>
                  </div>
                  <div className="  flex flex-wrap items-center py-3 px-4  text-[14px] text-left hover:bg-[color:var(--hover-base-secondary)]">
                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                      <path
                        fill="currentColor"
                        d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"
                      />
                    </svg>
                    <p className=" font-bold pl-3">Video Yayınla</p>
                  </div>
                </PopoverPanel>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
