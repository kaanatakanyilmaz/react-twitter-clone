import Logo from "./logo";
import Menu from "./menu";
import Account from "./account";
function SideBar() {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
}
export default SideBar;
