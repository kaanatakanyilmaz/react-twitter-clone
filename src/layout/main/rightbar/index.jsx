import Search from "./search";
import Premium from "./premium";
import Topics from "./topics";
import Follow from "./follow";
import Footer from "./Footer";

function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Topics />
      <Follow />
      <Footer />
    </aside>
  );
}
export default RightBar;
