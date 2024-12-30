import { useAccount } from "../../store/auth/hooks";
import Tab from "../../components/tab";
import ProfilePost from "./profilePost";
import Media from "./media";
import Articles from "./articles";
import Likes from "./likes";
import Answer from "./answer";
import Highlight from "./highlights";
import { numberFormat } from "../../utils/format";
function Profile() {
  const account = useAccount();

  return (
    <div>
      <div className=" px-4 h-[53px] w-full  flex sticky top-0 z-10  bg-[color:var(--background-primary)] backdrop-blur-md ">
        <div className="min-w-[56px] min-h-[32px] flex justify-start items-center text-[color:var(--color-base)]">
          <button className=" -ml-2 p-2 hover:bg-[color:var(--hover-base)] rounded-full">
            <svg viewBox="0 0 24 24" width={20} height={20}>
              <path
                fill="currentColor"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
          </button>
        </div>
        <div className="text-[color:var(--color-base)]">
          <div className=" font-bold text-xl mt-1">{account.userName}</div>
          <div className="text-[color:var(--color-base-secondary)] text-xs ">
            {account.post} gönderi
          </div>
        </div>
      </div>
      <div>
        <img src={account.photos} alt="" className="relative -z-10" />
      </div>
      <div>
        <div>
          <div className="flex justify-between">
            <div>
              {" "}
              <img
                src={account.avatar}
                alt=""
                className="rounded-full w-[133px] h-[133px] -z-10 absolute top-[183px] left-[615px]  border-4 border-[color:var(--background-primary)]"
              />
            </div>

            <button className="border border-[color:var(--color-base-secondary)] hover:bg-[color:var(--hover-base)] rounded-full px-4 py-1 mt-3 mr-4">
              <p className="font-bold text-[color:var(--color-base)]">
                {" "}
                Profili düzenle
              </p>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="px-4">
        <div className="flex mt-1 mb-3">
          <div>
            <p className="font-bold text-xl text-[color:var(--color-base)]">
              {account.userName}
            </p>
            <p className="text-[15px] text-[color:var(--color-base-secondary)]">
              {account.fullName}
            </p>
          </div>
          <div className="ml-1 mt-[6px] flex it text-[color:var(--color-primary)]">
            {/* <svg
              viewBox="0 0 22 22"
              width={18.75}
              height={18.75}
              className="ml-0.5"
            >
              <path
                fill="currentColor"
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
              ></path>
            </svg> */}
          </div>
        </div>
        <div className="flex items-center text-[color:var(--color-base-secondary)]">
          <div>
            <svg viewBox="0 0 24 24" width={18} height={18}>
              <path
                fill="currentColor"
                d="M8 10c0-2.21 1.79-4 4-4v2c-1.1 0-2 .9-2 2H8zm12 1c0 4.27-2.69 8.01-6.44 8.83L15 22H9l1.45-2.17C6.7 19.01 4 15.27 4 11c0-4.84 3.46-9 8-9s8 4.16 8 9zm-8 7c3.19 0 6-3 6-7s-2.81-7-6-7-6 3-6 7 2.81 7 6 7z"
              />
            </svg>
          </div>
          <div className="flex items-center ml-1">
            <div>Doğum tarihi:</div>
            <div className="ml-1">{account.date.day}</div>

            <div className="ml-1"> {account.date.mounth}</div>

            <div className="ml-1">{account.date.year}</div>

            <div className="ml-3">
              <svg viewBox="0 0 24 24" width={18} height={18}>
                <path
                  fill="currentColor"
                  d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"
                />
              </svg>
            </div>
            <div className="ml-1">{account.joining.mounth}</div>
            <div className="ml-1">{account.joining.year}</div>
            <div className="ml-1">tarihinde katıldı</div>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex mr-5">
            <div className="font-bold text-[color:var(--color-base)]">
              {numberFormat(account.follow.following)}
            </div>
            <div className="ml-1 text-[color:var(--color-base-secondary)]">
              Takip Edilen
            </div>
          </div>
          <div className="flex">
            <div className="font-bold text-[color:var(--color-base)]">
              {numberFormat(account.follow.followers)}
            </div>
            <div className="ml-1 mb-4 text-[color:var(--color-base-secondary)]">
              Takipçi
            </div>
          </div>
        </div>
      </div>
      <Tab activeTab="profilePost">
        <Tab.Items>
          <Tab.Item id="profilePost">Gönderiler</Tab.Item>
          <Tab.Item id="answer">Yanıtlar</Tab.Item>
          <Tab.Item id="highlights">Öne Çıkanlar</Tab.Item>
          <Tab.Item id="articles">Makaleler</Tab.Item>
          <Tab.Item id="media">Medya</Tab.Item>
          <Tab.Item id="likes">Beğeni</Tab.Item>
        </Tab.Items>
        <Tab.Content id="profilePost">
          <ProfilePost />
        </Tab.Content>
        <Tab.Content id="answer">
          <Answer />
        </Tab.Content>
        <Tab.Content id="highlights">
          <Highlight />
        </Tab.Content>
        <Tab.Content id="articles">
          <Articles />
        </Tab.Content>
        <Tab.Content id="media">
          <Media />
        </Tab.Content>
        <Tab.Content id="likes">
          <Likes />
        </Tab.Content>
      </Tab>
    </div>
  );
}
export default Profile;
