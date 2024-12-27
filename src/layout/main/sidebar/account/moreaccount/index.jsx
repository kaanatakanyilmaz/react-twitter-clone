import classNames from "classnames";
import { useAccount, useAccounts } from "../../../../../store/auth/hooks";
import { setCurrentAccount } from "../../../../../store/auth/actions";

function MoreAccount() {
  const accounts = useAccounts();
  const currentAccount = useAccount();

  return (
    <div className="py-3">
      {accounts?.slice(0, 2).map((account, index) => (
        <button
          onClick={() => setCurrentAccount(account)}
          key={index}
          className={classNames(
            "w-full  flex items-center text-left py-3 px-4 font-bold transition-colors text-[color:var(--color-base)]",
            {
              "hover:bg-[color:var(--hover-base-account)]":
                currentAccount.id !== account.id,
            }
          )}
        >
          <img src={account.avatar} className="w-10 h-10 rounded-full" alt="" />

          <div className="mx-3 flex-1 text-[15px] text-left  ">
            <h6 className="font-bold  ">{account.userName}</h6>
            <div className="text-[color:var(--color-base-secondary)]">
              {account.fullName}
            </div>
          </div>

          {currentAccount.id == account.id && (
            <svg className=" h-[16px] w-[16px]" viewBox="0 0 24 24">
              <path
                fill="#00ba7c "
                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
              ></path>
            </svg>
          )}
        </button>
      ))}
      <div className="my-3 h-px bg-[color:var(--border-primary)] " />

      <button className="w-full text-left ">
        <div className="p-3 hover:bg-[color:var(--hover-base-account)] text-[color:var(--color-base)]  font-bold transition-colors">
          Var olan bir hesap ekle
        </div>
      </button>
      <button className="w-full text-left ">
        <div className="p-3 hover:bg-[color:var(--hover-base-account)] text-[color:var(--color-base)]  font-bold transition-colors">
          Hesapları yönet
        </div>
      </button>
      <button className="w-full text-left">
        <div className="p-3 hover:bg-[color:var(--hover-base-account)] text-[color:var(--color-base)] font-bold transition-colors">
          {currentAccount.fullName} hesabından çıkış yap
        </div>
      </button>
    </div>
  );
}
export default MoreAccount;
