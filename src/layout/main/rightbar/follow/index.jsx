import { Link } from "react-router-dom";
import { whoFollowUsers } from "../../../../mock";
import UserCard from "../../../../components/user-card";

function Follow() {
  return (
    <Link to="/" className="">
      <div className="border border-[color:var(--border-primary)] text-[color:var(--color-base)] rounded-2xl  ">
        <h5 className="text-[20px] leading-6 font-bold py-3 px-4 ">
          Kimi takip etmeli
        </h5>

        {whoFollowUsers.slice(0, 3).map((user) => (
          <UserCard user={user} key={user.id} />
        ))}

        <div className=" text-left py-3 px-4 hover:bg-[color:var(--hover-base-secondary)]">
          <a href="explore" className="text-[color:var(--color-primary)]">
            Daha fazla göster
          </a>
        </div>
      </div>
    </Link>
  );
}

export default Follow;
