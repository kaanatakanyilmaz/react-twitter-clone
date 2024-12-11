import Button from "../../../../components/button";
import { useAccounts, useAccount } from "../../../../store/auth/hooks";

function Follow() {
  const follows = useAccounts();
  const currentAccount = useAccount();

  console.log("mevcut hesap", currentAccount);
  console.log("takipçiler", follows);

  return (
    <div className="h-[297px] mb-4 border border-[#2f3336] rounded-2xl">
      <div className="h-[326px] flex flex-col py-3 px-4">
        <h5 className="text-[20px] h-[48px] leading-6 font-bold ">
          Kimi takip etmeli
        </h5>

        {follows
          ?.filter((account) => account.id !== currentAccount.id)
          .slice(0, 3)
          .map((account, index) => (
            <div key={index} className="w-full h-[65px]  ">
              <div className="outline-none hover:bg-[#eff3f41a] w-full transitions-colors flex">
                <img
                  src={account.avatar}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />

                <div className="mx-3 text-[15px] text-left">
                  <h6 className="font-bold">{account.userName}</h6>
                  <div className="text-[#71767b]">{account.fullName}</div>
                </div>

                <div className="ml-auto my-auto flex justify-center items-center">
                  <Button size="whiteNormal">Takip et</Button>
                </div>
              </div>
            </div>
          ))}

        <div className="h-[52px]   text-left">
          <a href="explore" className="text-[#1d9bf0]">
            Daha fazla göster
          </a>
        </div>
      </div>
    </div>
  );
}
export default Follow;
