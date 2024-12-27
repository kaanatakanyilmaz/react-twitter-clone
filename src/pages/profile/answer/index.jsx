import { whoFollowUsers } from "../../../mock";
import UserCard from "../../../components/user-card";
function Answer() {
  return (
    <div>
      <div className="font-bold py-3 px-4 text-xl">Kimi takip etmeli</div>
      <div>
        <div>
          {whoFollowUsers.slice(0, 3).map((user) => (
            // <Follows follow={follow} key={index}></Follows>
            <UserCard user={user} key={user.id} />
          ))}
        </div>
        <div className=" text-left py-3 px-4 hover:bg-[color:var(--hover-base-secondary)]">
          <a href="explore" className="text-[#1d9bf0]">
            Daha fazla göster
          </a>
        </div>
      </div>
    </div>
  );
}

export default Answer;
