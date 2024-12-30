import Search from "./search";
import Premium from "./premium";
import Topics from "./topics";
import Follow from "./follow";
import Footer from "./Footer";
import SettingsRightBar from "../../../pages/settings/SettingsRightBar";
import MessageRightBar from "../../../pages/message/messageRİghtBar";
import { useLocation } from "react-router-dom";

function RightBar() {
  const location = useLocation();
  const explorer = ["/explore"];
  const message = ["/message"];
  const settings = ["/settings"];

  const showExplorer = explorer.includes(location.pathname);
  const showMessage = message.includes(location.pathname);
  const showSettings = settings.includes(location.pathname);

  if (showMessage) {
    return (
      <aside className=" mr-2.5 mt-2 h-full w-[600px] border-r border-[color:var(--border-primary)]">
        <MessageRightBar />
      </aside>
    );
  }

  if (showSettings) {
    return (
      <aside className=" h-full mr-2.5 mt-2">
        <SettingsRightBar />
      </aside>
    );
  }
  return (
    <aside className="w-[350px] mr-2.5 mt-2">
      {!showExplorer && (
        <>
          <Search />
          <Premium />
          <Topics />
        </>
      )}

      <Follow />
      <Footer />
    </aside>
  );
}
export default RightBar;
