import { Link } from "react-router-dom";
import { whoFollowUsers } from "../../../../mock";
import UserCard from "../../../../components/user-card";

function Follow() {
  return (
    <Link to="/" className="">
      <div className="border border-[#2f3336] rounded-2xl  ">
        <h5 className="text-[20px] leading-6 font-bold py-3 px-4">
          Kimi takip etmeli
        </h5>

        {whoFollowUsers.slice(0, 3).map((user) => (
          <UserCard user={user} key={user.id} />
        ))}

        <div className=" text-left py-3 px-4">
          <a href="explore" className="text-[#1d9bf0]">
            Daha fazla göster
          </a>
        </div>
      </div>
    </Link>
  );
}
export default Follow;
